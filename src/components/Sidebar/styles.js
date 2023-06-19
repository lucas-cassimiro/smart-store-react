import styled, { css } from "styled-components";

export const Container = styled.div`
    background-color: #171923;
    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 255px;
    left: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSidebar .4s;
    z-index: 999;

    > svg {
        position: fixed;
        color: white;
        height: 30px;
        display: flex;
        margin-top: 32px;
        margin-left: 60px;
        cursor: pointer;
    }

    @keyframes showSidebar {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media (max-width: 420px){
        width: 200px;
    }

    @media (max-width: 320px){
        width: 150px;
    }
`

export const Content = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    ol {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 400px;
    }

    @media (max-width: 320px){
        ol {
            font-size: 1rem;
        }
    }
`
