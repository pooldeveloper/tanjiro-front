import React, { useContext, useState, useEffect } from 'react';
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import AnimeContext from "../../context/anime/AnimeContext";

const ContainerList = styled.ul`
  list-style: none;
  & li {
    padding: 16px;
    display: block;
    border-bottom: 1px solid #eceff1;
    border-color: rgba(68, 61, 104, 0.5);
    font-size: 16px;
    transition: all 100ms;
    color: var(--white);
    &.active {
      background-color: var(--primary);
    }
    &:hover {
      background-color: var(--primary);
      transition: all 100ms;
    }
    & i {
      margin-right: 10px;
    }
  }
`;

const ListEpisodes = () => {
  const { anime } = useContext(AnimeContext);

  const scrollTo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const[episodesReverse , setEpisodesReverse] = useState(null);
  useEffect(() => {
    setEpisodesReverse(anime.episodes.reverse());
    // eslint-disable-next-line
  }, [anime])

  if(!episodesReverse) return null;
  return (
    <ContainerList>
      {episodesReverse.map((episode) => {
        return (
          <Link key={episode.id} to={`/${anime.idAnime}/${episode.id}`} onClick={scrollTo}>
            <li >
              <i className="far fa-play-circle"></i>
              {episode.name}
            </li>
          </Link>
        );
      })}
    </ContainerList>
  );
}

export default ListEpisodes;