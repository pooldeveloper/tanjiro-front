import React from "react";
import styled from "@emotion/styled";
import bg from "../assets/img/bg.jpg"

const Form = styled.form`
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
    font-family: 'Open Sans', sans-serif;
    gap: 20px;
`;
const Title = styled.h1`
    font-size: 25px;
    font-weight: 800;
    @media(min-width:750px){
      font-size: 35px;
    }
`;
const TitleH3 = styled.h3`
     font-size: 15px;
    @media(min-width:750px){
      font-size: 18px;
    }
`;
const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    & i{
      font-size: 50px;
      color: var(--primary);
    }
`;
const Container = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  left: 0px;
  background-color: var(--secondary);
  background-image: linear-gradient(rgba(0, 0, 0, .50) 0%, rgba(0,0,0,.50) 100%), url(${bg});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  width: 100%;
  height: calc(100vh - 50px);
  z-index: -1;
  @media (min-width: 750px) {
    height: 100vh;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Form>
        <Title>¿Necesitas una pagina web bonita para tu negocio?</Title>
        <TitleH3>Puedes contactarte por su pagina dando click al icono de abajo :D</TitleH3>
        <Wrap>
          <a target="_blank" rel="noreferrer" href="!#"><i className="fas fa-link"></i></a>
        </Wrap>
      </Form>
    </Container>
  );
};

export default Contact;
