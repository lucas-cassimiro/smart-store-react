import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 768px){
    display: flex;
  align-items: center;
  justify-content: center;
 // margin-top: 50px;
  margin-bottom: 100px;
  position: relative;
  }
`;

export const Content = styled.section`
  h1 {
    padding-left: 1.5rem;
    padding-top: 1.5rem;
    font-size: 1rem;
    font-weight: 400;
  }
`;