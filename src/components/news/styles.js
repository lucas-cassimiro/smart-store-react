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
    margin-bottom: 12px;
    font-family: 'JejuGothic', sans-serif;
    font-size: 35px;
    font-weight: 400;
    margin-top: 32px;
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
`

export const SwiperContainer = styled(Swiper)`
        width: 92.5%;
        padding: 0 40px;

        .swiper-button-next{
            right: var(--swiper-navigation-sides-offset, 0px);
        }

        .swiper-button-prev{
            left: var(--swiper-navigation-sides-offset, 0px);
        }
`