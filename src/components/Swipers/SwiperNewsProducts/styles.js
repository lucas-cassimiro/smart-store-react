import styled from "styled-components";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const SectionNovidades = styled.section`
    margin-bottom: 63px;
`
export const Novidades = styled.h1`
    width: 100%;
    text-align: center;
    margin-bottom: 0.75rem;
    font-family: 'JejuGothic', sans-serif;
    font-size: 2.1875rem;
    font-weight: 400;
    margin-top: 2rem;

    @media (max-width: 420px){
        font-size: 14px;
    }
`

export const Mostruario = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export const ContainerProducts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(147.42deg, #000000 21.52%, #313131 165.15%);
    color: white; 
    height: 28.125rem;
    width: 25rem;
    cursor: pointer;
    flex-shrink: 0;    

    div{width: 400px;
        height: 350px;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;}

    @media (max-width: 1440px) {
        height: 28.125rem;
        width: 23rem;
    }

    @media (max-width: 1366px) {
        height: 27.100rem;
        width: 22rem;
    }

    @media (max-width: 1024px){
        height: 24.100rem;
        width: 17rem;

        div {
            height: 290px;
        }
    }

    @media (max-width: 420px){
        height: 10rem;
        width: 6rem;

        h2 {
            font-size: 10px;
        }

        p {
            font-size: 10px;
        }


    }
`

export const SwiperContainer = styled(Swiper)`

        width: 92.5%;
        padding: 0 40px;

        .swiper-wrapper{
            z-index: 0;
        }

        @media (max-width: 1024px){
            width: 98%;
        }

        @media (max-width: 420px){
            width: 88%;
        }



`

export const Img = styled.img`
    @media (max-width: 1024px){
        height: 210px;
        width: 215px;
    }

    @media (max-width: 420px){
        height: 50px;
        width: 50px;
    }
`