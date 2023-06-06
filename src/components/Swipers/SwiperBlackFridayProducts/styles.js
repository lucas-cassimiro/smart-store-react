import styled from "styled-components";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const SwiperContainer = styled(Swiper)`
  margin-top: 50px;
  margin-bottom: 35px;

        width: 92.5%;
        padding: 0 40px;

        .swiper-button-next{
            right: var(--swiper-navigation-sides-offset, 0px);
        }


        .swiper-button-prev{
            left: var(--swiper-navigation-sides-offset, 0px);
        }

        .swiper-wrapper{
            z-index: 0;
        }

        @media (max-width: 1024px){
            width: 97%;
        }

`;