import styled from "styled-components";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const SectionNovidades = styled.section`
    margin-bottom: 3.9375rem;

    @media (max-width: 420px){
        margin-bottom: 2.1875rem;
    }
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
       font-size: 1.1rem;
       margin-top: 1rem;
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
    cursor: pointer;
    flex-shrink: 0;    

    div {
        width: 400px;
        height: 350px;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    h2 {
        font-weight: 400;
    }

    p span {
        color: #93C1FD;
    }


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

    @media (max-width: 420px){
        height: 15.100rem;

        div {
            height: 180px;
        }

        h2 {
            font-size: 0.9rem;
            font-weight: 400;
        }

        p {
            font-size: 0.7rem;
            font-weight: 400;
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

            .swiper-pagination {
                margin-top: 20px;
                position: relative;
              }
              
              &.swiper-pagination-bullet {
                width: 100px;
                height: 11px;
                background: #9e9e9ede;
                opacity: 1;
                border: 0;
                cursor: pointer;
                transition: 0.3s ease-in-out;
                border-radius: 0;
            
                &.swiper-pagination-bullet-active {
                  background-color: #313131;
                }
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
        height: 110px;
        width: 120px;
    }
`