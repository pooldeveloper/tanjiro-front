import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  z-index: 50;
  display: flex;
  align-items: center;
  background-color: var(--secondary);
  height: 50px;
  justify-content: center;
  bottom: 0px;
  right: 0px;
  left: 0px;
  width: 100%;
  position: fixed;
  gap: 20px;
  @media (min-width: 750px) {
    display: none;
  }
  & a {
    color: #aaa;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
    &.active {
      color: #fff;
    }
  }
`;
const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const HeaderButton = () => {
  return (
    <Nav>
      <NavLink activeClassName="active" to="/">
        <Icon>
          <i className="fas fa-home"></i>
          Home
        </Icon>
      </NavLink>
      <NavLink activeClassName="active" to="/animes">
        <Icon>
          <i className="fas fa-play"></i>
          Animes
        </Icon>
      </NavLink>
      <NavLink activeClassName="active" to="/contacto">
        <Icon>
          <i className="fas fa-paper-plane"></i>
          Contacto
        </Icon>
      </NavLink>
    </Nav>
  );
};

export default HeaderButton;
