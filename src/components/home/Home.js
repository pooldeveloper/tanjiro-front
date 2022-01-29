import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import bg from "../../assets/img/bg.jpg"

const Title = styled.h1`
  font-size: 25px;
  font-weight: 800;
  @media (min-width: 750px) {
    font-size: 35px;
  }
`;
const TitleContainer = styled.div`
  color: var(--white);
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  gap: 20px;
  & > a {
    width: 200px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary);
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    color: var(--white);
    font-size: 13px;
    @media (min-width: 750px) {
        width: 250px;
        height: 50px;
        font-size: 16px;
    }
  }
`;
const TitleH3 = styled.h3`
  font-size: 15px;
  @media (min-width: 750px) {
    font-size: 18px;
  }
`;
const Container = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  background-image: linear-gradient(rgba(0, 0, 0, .50) 0%, rgba(0,0,0,.50) 100%), url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: calc(100vh - 50px);
  z-index: -1;
  @media (min-width: 750px) {
    height: 100vh;
  }
`;
const IconTelegram = styled.a`
  position: absolute;
  bottom: 130px;
  right: 0px;
  width: 50px;
  height: 50px;
  text-align: center;
  @media (min-width: 750px) {
    bottom: 70px;
  }
  & i{
    font-size: 50px;
    color: #0088cc;
  }
`;

const Home = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>La primera plataforma para ver tus animes favoritos con total comodidad y sin publicidad</Title>
        <TitleH3>Creada de fans para fans</TitleH3>
        <Link to="/snk-4-2">Ver ahora Shingeki No Kyojin 4 Parte 2!</Link>
      </TitleContainer>
        <IconTelegram target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScBuRGukYsymD6Vum-v3wLW-Xvhcd92FEnLXtqRVOxDwAA9jw/viewform">
          <i className="fab fa-telegram"></i>
          Mas Animes aqui
        </IconTelegram>
    </Container>
  );
};

export default Home;
