import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnimeState from "./context/anime/AnimeState";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeaderButton from "./components/layout/HeaderButton";
import Home from "./components/home/Home";
import Anime from "./components/anime/Anime";
import Episode from "./components/anime/Episode";
import Animes from "./components/Animes";
import Contact from "./components/Contact";

const Container = styled.div`
  width: 90%;
  margin: 0px auto;
`;

function App() {
  return (
    <AnimeState>
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/animes" component={Animes} />
            <Route exact path="/contacto" component={Contact} />
            <Route exact path="/:idAnime/:idEpisode" component={Episode} />
            <Route exact path="/:idAnime" component={Anime} />
          </Switch>
          <HeaderButton />
          <Footer />
        </Container>
      </Router>
    </AnimeState>
  );
}

export default App;
