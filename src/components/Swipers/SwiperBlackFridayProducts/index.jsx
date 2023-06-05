import * as S from "./styles";
import React from "react";
import { SwiperSlide } from "swiper/react";
import Swiper, { Navigation, A11y, Autoplay } from "swiper";
import { products } from "./blackFridayProductsData";
import CardProducts from "../../cardProducts";
import SwiperSwitchButton from "../SwiperSwitchButton";

const SwiperBlackFridayProducts = () => {
  


  
  return (
    <div>
      <S.SwiperContainer
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={24}
        speed={1000}
        slidesPerView={4}
        // navigation
        // autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.name}>
            <CardProducts product={product} />
          </SwiperSlide>
        ))}
        <SwiperSwitchButton />
      </S.SwiperContainer>
    </div>
  );
};

export default SwiperBlackFridayProducts;
