import styled from "styled-components";

export const Container = styled.div`
    align-self: center;

    @media (max-width: 1366px){
        margin-left: 80px;
        margin-right: 80px;
    }

    @media (max-width: 1024px){
        margin-left: 50px;
        margin-right: 50px;
    }

    @media (max-width: 420px){
        margin-left: 5px;
        margin-right: 5px;
    }


`

export const Img = styled.img`
    width: 100%;
`