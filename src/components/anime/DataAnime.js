import React, {useContext} from "react";
import styled from "@emotion/styled";
import AnimeContext from "../../context/anime/AnimeContext";

const Container = styled.div`
  margin: 20px auto;
  color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 750px) {
    flex-direction: row;
  }
`;
const Image = styled.div`
  margin: 0px auto;
  @media (max-width: 335px) {
    & img{
      width: 100%;
    }
  }
`;
const Overview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: auto;
  gap: 20px;
  @media (min-width: 750px) {
    height: 450px;
    width: 70%;
    flex-wrap: wrap;
  }
`;
const TitleH1 = styled.h1`
  font-size: 25px;
`;
const Ul = styled.ul`
  list-style: none;
`;
const Li = styled.li`
  margin-bottom: 20px;
`;
const Subtitle = styled.h3`
  color: var(--gray);
  border-bottom: 2px solid #9e9e9e1f;
  margin-bottom: 10px;
`;


const DataAnime = () => {

  const { anime } = useContext(AnimeContext);
  
  return (
    <Container>
      <Image>
        <img alt={`poster de ${anime.name}`} src={`${process.env.REACT_APP_BACKEND_URL}/${anime.poster}`}></img>
      </Image>
      <Overview>
        <TitleH1>{anime.name}</TitleH1>
        <Ul>
          <Li>
            <Subtitle>Sinopsis:</Subtitle>
            <p>{anime.synopsis}</p>
          </Li>
          <Li>
            <Subtitle>Próximo Episodio:</Subtitle>
            <p>{anime.nextEpisode}</p>
          </Li>
          <Li>
            <Subtitle>Cantidad de episodios:</Subtitle>
            <p>{anime.numberEpisodes}</p>
          </Li>
        </Ul>
      </Overview>
    </Container>
  );
};

export default DataAnime;
