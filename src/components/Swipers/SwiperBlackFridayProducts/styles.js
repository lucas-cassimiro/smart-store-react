import styled from "styled-components";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const SwiperContainer = styled(Swiper)`
 // margin-top: 3.125rem;
    margin-bottom: 2.1875rem;

        width: 97%;
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

        @media (max-width: 420px){
          //  margin-top: 10px;
            padding: 0;
        }
`;