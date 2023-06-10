import * as S from "./styles";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Swiper, { Navigation, Pagination, A11y, Autoplay } from "swiper";
// import Swiper, { Navigation, Pagination, A11y} from "swiper";
import { products } from "./blackFridayProductsData";
import CardProducts from "../../cardProducts";
import SwiperSwitchButton from "../SwiperSwitchButton";

const SwiperBlackFridayProducts = () => {
  return (
    <>
      <S.SwiperContainer

          breakpoints={
            {
              320: {
                spaceBetween: 5,
                slidesPerView: 2,
              },
              768: {
                spaceBetween: 1,
                slidesPerView: 2,
                modules: [Navigation, A11y],
                pagination: false
              },
              1024: {
                spaceBetween: 50,
                slidesPerView: 3,
                pagination: false
              },
              1366: {
                slidesPerView: 4,
                pagination: false
              }
            }
          }

        modules={[Navigation, Pagination, A11y]}
        spaceBetween={24}
        speed={1000}
        slidesPerView={4}
        pagination={{ clickable: true }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.name}>
            <CardProducts product={product} />
          </SwiperSlide>
        ))}
        <SwiperSwitchButton />
      </S.SwiperContainer>
    </>
  );
};

export default SwiperBlackFridayProducts;
