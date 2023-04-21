import styled from "styled-components";

export const FiltroContainer = styled.section`
  margin: 50px;
  width: 200px;
  
`;

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
