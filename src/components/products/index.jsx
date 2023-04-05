import * as S from "./styles";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";
import { products } from "./productsData";
import SwiperNavButton from "../swiperButton";
import HalfRating from "../rating";
import { CardProducts } from "../cardProducts";

const ProductsBanner = () => {
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
            <CardProducts product={product}/>
          </SwiperSlide>
        ))}
        <SwiperNavButton/>
      </S.SwiperContainer>
    </div>
  );
};

export default ProductsBanner;
