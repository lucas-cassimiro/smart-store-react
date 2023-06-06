import styled from "styled-components";

export const CardDiv = styled.div`
  width: 300px;
  height: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 1440px){
    width: 292px;
  }

  @media (max-width: 1366px){
    width: 300px;
    height: 330px;
  }

  @media (max-width: 1024px){
    width: 200px;
  }

  @media (max-width: 768px){
    width: 160px;
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

  @media (max-width: 1366px){
    h4 {
      font-size: 13.2px;
    }

    p {
      font-size: 13.5px;
    }
  }

  @media (max-width: 1024px){

    margin-left: 15px;


    h4{
      font-size: 10.4px;
    }

    div {
      gap: 5px;
    }

    p {
      font-size: 10px;
    }

    .discount-price {
      font-size: 14px;
    }
  }

  @media (max-width: 768px){
    h4 {
      font-size: 8px;
    }

    p {
      padding: 3px 5px;
      font-size: 6px;
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
`

export const Carrinho = styled.section`
  display: flex;
  justify-content: space-between;
  width: 210px;

  @media (max-width: 1024px){
    width: 150px;
  }
`
