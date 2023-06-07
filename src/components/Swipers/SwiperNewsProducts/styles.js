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


    


    // @media (max-width: 420px){
    //     font-size: 14px;
    // }
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
    // width: 25rem;
    cursor: pointer;
    flex-shrink: 0;    

    div{width: 400px;
        height: 350px;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;}

    @media (max-width: 1024px){
       height: 24.100rem;
    

        div {
            height: 290px;
        }
    }

    @media (max-width: 768px){
        height: 18.100rem;

       div {
           height: 220px;
       }

       h2 {
           font-size: 1.125rem;
       }
   
       p {
           font-size: 0.875rem;
       }
    }
}
`

export const SwiperContainer = styled(Swiper)`

        width: 97%;
        padding: 0 40px;

        .swiper-wrapper{
            z-index: 0;
        }

        @media (max-width: 420px){
            padding: 0;
        }
`

export const Img = styled.img`
    @media (max-width: 1024px){
        height: 190px;
        width: 205px;
    }

    @media (max-width: 768px){
        width: 145px;
        height: 140px;
    }

    @media (max-width: 420px){
        height: 130px;
        width: 120px;
    }
`