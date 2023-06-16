import styled from "styled-components";

export const Content = styled.section`
  h1 {
    padding-top: 2rem;
    padding-left: 3.25rem;
    font-size: 1.3rem;
    font-weight: 400;

    @media (max-width: 800px) {
      padding-left: 2rem;
    }

    @media (max-width: 420px) {
      font-size: 1rem;
      padding-left: 1.5rem;
      padding-top: 1.5rem;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 100px;
`;
