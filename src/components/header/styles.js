import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TopoHeader = styled.div`
  display: flex;
  background-color: #3877c9;
  width: 100%;
  height: 2.125rem;
  color: #fff;
  align-items: center;

  p {
    width: 60%;
    display: flex;
    justify-content: flex-end;
    font-size: 0.8rem;

    span {
      color: #faff00;
      margin-left: 3px;
    }
  }

  a {
    display: flex;
    justify-content: flex-end;
    margin: 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    width: 40%;
  }
  

`;




export const MeioHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #313131;
  height: 3.5625rem;
  align-items: center;
`;

export const Localizacao = styled.div`
  color: #a0a0a0;
  display: flex;
  justify-content: flex-start;
  margin-left: 2rem;
  width: 33.3%;

  a {
    color: #a0a0a0;
  }

  img {
    margin-right: 0.5rem;
    width: 15px;
  }
`;

export const CarrinhoELogin = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 1.5rem;
  gap: 16px;
  width: 33.3%;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IconsLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 4rem;

  p {
    color: #dcdcdc;
  }
`;

export const Navigation = styled.nav`
  width: 100%;
  background-color: #313131;

  ul {
    display: flex;
    justify-content: space-evenly;
    height: 3rem;
    align-items: center;
    border-top: 0.0625rem solid;
    font-size: 1.1rem;
  }
`;

export const NavigationLink = styled(NavLink)`
  color: white;
  font-weight: 600;

  &:hover {
    border-bottom: 2px solid #fff;
    font-weight: 700;
  }
`;

export const Logo = styled.div`
  position: relative;
  width: 33.3%;
  text-align: center;
  z-index: 999;

  h1 a {
    -webkit-text-stroke: 1px #074291;
    font-family: var(--font-logo);
    color: #fff;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
  }
`