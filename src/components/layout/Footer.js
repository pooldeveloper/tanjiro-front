import React from 'react';
import styled from "@emotion/styled";
const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 0px;
    height: 50px;
    position: absolute;
    right: 0px;
    left: 0px;
    width: 100%;
    bottom: 50px;
    text-align: center;
    color: var(--white);
    font-size: 16px;
    font-weight: 100;
    font-family: 'Open Sans', sans-serif;
    @media (min-width: 750px) {
        bottom: 0px;
    }
    & p{
        margin: 0px;
    }
    & a{
        color: var(--white);
        text-decoration: none;
    }
` ;
const Footer = () => {
    return (
        <FooterContainer>
             <p>
                Ningun video se encuentra alojado en nuestro servidor
                <br/>
                videos libres encontrados en internet
                <br/>
                Creado por Pool Nuñez y grupo :D
                <br/>
                &copy; 2022 <a href="https://tanjiro.netlify.app/">tanjiro.netlify.app</a>
             </p>
        </FooterContainer>
    );
}
 
export default Footer;
