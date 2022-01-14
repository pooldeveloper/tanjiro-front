import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { DiscussionEmbed } from "disqus-react";
import AnimeContext from "../../context/anime/AnimeContext";
import DataAnime from "./DataAnime";
import ListEpisodes from "./ListEpisodes";

const AnimeContainer = styled.div`
  color: var(--white);
`;
const TitleH4 = styled.h4`
  font-size: 20px;
  margin: 20px 0px;
  & > i {
    font-size: 20px;
    color: var(--primary);
    margin-right: 10px;
  }
`;

const Animes = () => {
  const { idAnime } = useParams();

  const { anime, getAnime } = useContext(AnimeContext);
  useEffect(() => {
    getAnime(idAnime);
    // eslint-disable-next-line
  }, [])

  if (!anime) return null
  return (
    <AnimeContainer>
      <DataAnime />
      <TitleH4>
        <i className="fas fa-list"></i> Episodios:
      </TitleH4>
      <ListEpisodes />
      <TitleH4>
        <i className="fas fa-comment"></i> Comentarios:
      </TitleH4>
      <DiscussionEmbed
        shortname="tanjiro-1"
        config={{
          url: "https://pooldeveloper.netlify.app",
          identifier: "0",
          title: "comentarios",
          language: "es_MX",
        }}
      />
    </AnimeContainer>
  );
};
export default Animes;
