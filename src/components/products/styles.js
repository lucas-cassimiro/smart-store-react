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
`;

export const CardDiv = styled.div`
  width: 300px;
  height: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 90%;
  margin-left: 16px;
  gap: 10px;
  font-family: var(--font-text);

  div {
    display: flex;
    gap: 16px;

    p {
      padding: 6px 20px;
      background: #d93a1e;
      border-radius: 4px;
      color: white;
      font-weight: 600;
    }

    .black-friday {
      background: #313131;
    }
  }

  h4 {
    font-weight: 400;
    font-size: 14px;
  }

  .real-price {
    font-size: 12px;
    color: rgba(49, 49, 49, 0.5);
    text-decoration-line: line-through;
  }

  .discount-price {
    font-weight: 600;
    font-size: 16px;
  }

  .parcelas{
    font-size: 12px;
  }
`;

export const Images = styled.img`
  width: 230px;
  height: 185.92px;
  object-fit: contain;
`
