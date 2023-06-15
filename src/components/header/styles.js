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
  
  @media (max-width: 420px){
    p {
      font-size: 0.5rem;
    }

    a {
      font-size: 0.6rem;
    }
  }

  @media (max-width: 360px){
    p {
      font-size: 0.45rem;
   
    }

    a {
      font-size: 0.5rem;
      width: 38%;
    }
  }
`;

export const MeioHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #313131;
  height: 3.5625rem;
  align-items: center;

  @media (max-width: 420px){
    height: 3rem;
  }




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

  @media (max-width: 420px){

    margin-left: 0.5rem;
    align-items: center;

    a {
      font-size: 10px;
    }

    img {
     height: 17px;
     width: 12px;
    }
  }

  


`;

export const CarrinhoELogin = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 1.5rem;
  gap: 16px;
  width: 33.3%;

  @media (max-width: 420px){
    margin-right: 0.5rem;
    gap: 0;
    font-size: 12px;
  }

  @media (max-width: 320px){
   font-size: 11px;
  }



`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 420px){
    width: 40px;
  }


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

  @media (max-width: 420px){
    img {
      width: 1rem;
    }
  }

  @media (max-width: 420px){
    width: 3rem;
  }  
`;

export const Navigation = styled.nav`
  width: 100%;
  background-color: #313131;
  border-top: 0.0625rem solid;

  button {
    background-color: transparent;
    border: none;
    margin-left: 20px;
    font-size: 20px;
    color: white;
    display: none;
  }

  ul {
    display: flex;
    justify-content: space-evenly;
    height: 3rem;
    align-items: center;
    font-size: 1.1rem;
  }

  @media (max-width: 768px){
    height: 2rem;
    display: flex;
    align-items: center;

    button {
      display: block;
      display: flex;
      align-items: center;
    }

    ul {
      display: none;
    }
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

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 a {
    -webkit-text-stroke: 1px #074291;
    font-family: var(--font-logo);
    color: #fff;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 30px;
  }

  @media (max-width: 420px){
    h1 a {
      font-size: 21px;
    }
  }

 
  



`
export const Botao = styled.button`
  width: 50px;
  height: 50px;
  display: none;

  @media (max-width: 768px){
    display: block;
  }
`