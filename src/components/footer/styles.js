import styled from "styled-components";

export const Container = styled.footer`
width: 100%;
height: 20rem;
background-color: #DCDCDC;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding: 32px 0;
`

export const Ul = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-between;

div:first-child {
    border-bottom: 1px solid rgba(49, 49, 49, 0.5); 
    width: 400px;
}

`

export const Li = styled.li`
border-bottom: 1px solid rgba(49, 49, 49, 0.5); 
width: 173px;
margin-left: 30px;
`

export const Navegation = styled.a`
font-size: 24px;
font-weight: 600;
color: #000000;
`
export const Tittle = styled.h1`
font-weight: 600;
font-size: 24px;
`
export const Sac = styled.div`
    display: flex;
    flex-direction: column;
`
export const RedesSociais = styled.div`
    div {
        img {
            width: 25px;
            height: 25px;
        }
    }

`
