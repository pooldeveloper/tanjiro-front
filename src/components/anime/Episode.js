import React, {useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import Iframe from "react-iframe";
import { DiscussionEmbed } from "disqus-react";
import AnimeContext from "../../context/anime/AnimeContext";
import ListEpisodes from "./ListEpisodes";

const ContainerAnime = styled.div`
  color: var(--white);
`;
const Main = styled.main`
  text-decoration: none;
  padding: 20px 0px;
`;
const IframeContainer = styled.div`
  margin: 0px auto;
  width: calc(100vw * 1200 / 1366);
  height: calc(100vw * 675 / 1366);
  @media (min-width: 750px) {
    width: calc(100vw * 800 / 1366);
    height: calc(100vw * 450 / 1366);
  }
`;
const TitleH3 = styled.h3`
  font-size: 25px;
  color: var(--white);
  text-align: center;
  margin: 20px 0px;
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

const Episode = () => {
    const {idAnime, idEpisode} = useParams();

    const {episode, getEpisode } = useContext(AnimeContext);
    
    useEffect(() => {
      getEpisode(idAnime, idEpisode);
      // eslint-disable-next-line
    }, [idEpisode])

    if(!episode) return null;
    return (
        <ContainerAnime>
            <Main>
                <IframeContainer>
                    <Iframe
                        url={episode[0].url}
                        className="iframe"
                        display="initial"
                        allow="fullscreen"
                        position="relative"
                        width="100%"
                        height="100%"
                    />
                </IframeContainer>
                <TitleH3>{episode[0].name}</TitleH3>
            </Main>
            <TitleH4>
                <i className="fas fa-list"></i> Episodios:
            </TitleH4>
            <ListEpisodes/>
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
        </ContainerAnime>
    );
}

export default Episode;
