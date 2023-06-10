import styled from "styled-components";

export const CardDiv = styled.div`
  height: 375px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 16.5px;

  @media (max-width: 1024px){
    margin-left: 0;
  }

  @media (max-width: 768px){
    margin-left: 25px; 
  }

  @media (max-width: 420px){
    margin-left: 20px;
    width: 150px;
  }

  @media (max-width: 320px){
    margin-left: 0px;
  }

`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 90%;
  margin-left: 16px;
  gap: 10px;
  font-family: var(--font-text);

  div {
    display: flex;
    gap: 16px;

    p {
      padding: 6px 20px;
      background: #d93a1e;
      border-radius: 4px;
      color: white;
      font-weight: 600;
    }

    .black-friday {
      background: #313131;
    }
  }

  h4 {
    font-weight: 400;
    font-size: 14px;
  }

  .real-price {
    font-size: 12px;
    color: rgba(49, 49, 49, 0.5);
    text-decoration-line: line-through;
  }

  .discount-price {
    font-weight: 600;
    font-size: 16px;
  }

  .parcelas{
    font-size: 12px;
  }

  @media (max-width: 768px){

    div {
      gap: 7px;

      p {
        font-size: 0.875rem;
      }
    }

    h4 {
      font-size: 0,8215rem;
    }

    .discount-price {
      font-size: 12px;
    }

    .parcelas {
      font-size: 11px;
    }
  }

  @media (max-width: 420px){

    gap: 7px;


    div {
      display: block;

      p {
        padding: 4px 14px;
        font-weight: 500;
        font-size: 13px;
      }

      


    }

    h4 {
      font-size: 0.775rem;
    }

  }
`;

export const Images = styled.img`
  width: 230px;
  height: 185.92px;
  object-fit: contain;

  @media (max-width: 1366px){
    width: 215px;
    height: 150px;
  }

  @media (max-width: 1024px){
    width: 150px;
  }

  @media (max-width: 768px){
    width: 150.3px;
  }

  @media (max-width: 420px){
    width: 120px;
  }




`

export const Button = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 23px;

    @media (max-width: 420px){
      font-size: 18px;
    }


`

export const Carrinho = styled.section`
  display: flex;
  justify-content: space-between;
  width: 210px;

  @media (max-width: 420px){
    width: 135px;
  }


`
