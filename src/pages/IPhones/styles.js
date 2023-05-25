import styled from "styled-components";

export const ContainerGlobal = styled.section`
  font-family: "Inter", sans-serif;
`

export const FiltroContainer = styled.section`
  margin-left: 84px;
  width: 200px;

  h2 {
    font-size: 16px;
  }

  div {
    display: flex;

    img {
      height: 25px;
      width: 25px;
    }
`;

export const CategoriasRelacionadas = styled.div`

  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: 600;
    width: 224px;
  }
`






export const Filtro = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-family: var(--font-text);
    font-weight: 600;
    font-size: 20px;
    margin: 16px 0;
  }

  label {
    font-family: var(--font-text);

    input {
      margin: 8px;
    }
  }
`;

export const Iphones = styled.p`
  width: 100%;
  padding-top: 34px;
  padding-left: 84px;
  padding-bottom: 36px;
`

export const ContainerFilter = styled.div`
  width: 80%;
  height: 48px;
  border-bottom: 1px solid black;
  margin-left: 107px;
  margin-bottom: 28px;
`
export const Categorias = styled.h2`
  font-size: 16px;
  margin-top: 99px;
`

export const Celulares = styled.div`
  display: flex;
  flex-wrap: wrap;
`
