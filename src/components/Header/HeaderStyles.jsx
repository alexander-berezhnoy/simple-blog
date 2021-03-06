import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.nav`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  background-color: #1144AA;
  color: #fff;

  h2 {
      font-family: Lobster, cursive;
  }
  @media screen and (max-width: 768px) {
    padding: 10px;
  }
  @media screen and (max-width: 576px) {
    margin-bottom: 15px;
  }
  @media screen and (max-width: 376px) {
    padding: 5px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 350px;
  padding: 25px;
  @media screen and (max-width: 768px) {
    width: 60px;
    padding: 0px;
  }
  @media screen and (max-width: 576px) {
    width: 50px;
  }
`;
