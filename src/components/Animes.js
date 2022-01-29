import React, { useEffect, useContext } from "react";
import styled from "@emotion/styled";
import AnimeContext from "../context/anime/AnimeContext";
import { Link } from "react-router-dom";


const ContainerAnimes = styled.div`
  color: var(--white);
  margin-bottom: 70px;
  & h1{
    text-align: center;
  }
`;
const CenterAnime = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  text-align: center;
  margin: 30px 0px;
  flex-wrap: wrap;
  @media(min-width:750px){
    gap: 30px;
  }
`;
const LinkAnime = styled.div`
  width: 150px;
  @media(min-width:750px){
    width: 300px;
  }
`;
const ImageWidth = styled.div`
  & img{
    width: 100%;
  }
`;

const Animes = () => {
  const { animes, getAnimes } = useContext(AnimeContext);
  useEffect(() => {
    getAnimes();
    // eslint-disable-next-line
  }, []);

  if (!animes) return null;
  return (
    <ContainerAnimes>
      <h1>Animes Populares</h1>
      <CenterAnime>
        {
          animes.map(anime => (
            <LinkAnime key={anime.idAnime}>
              <Link to={`/${anime.idAnime}`}>
                <ImageWidth>
                  <img alt={`poster de ${anime.name}`} src={`data:image/jpeg;base64,${anime.poster}`} />
                </ImageWidth>
                <h3>{anime.name}</h3>
              </Link>
            </LinkAnime>
          ))
        }
      </CenterAnime>
    </ContainerAnimes>
  );
}

export default Animes;