import * as S from "./styles";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";
import { products } from "./productsData";
import SwiperNavButton from "../swiperButton";
import HalfRating from "../rating";

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
            <S.CardDiv>
              <S.Images src={product.img} alt={product.name} />
              <S.DescriptionContainer>
                <div>
                  <p>-{product.discount}%</p>
                  <p className="black-friday">Black Friday</p>
                </div>
                <h4>{product.name}</h4>
                <HalfRating star={product.star}/>
                <p className="real-price">R$ {product.price}</p>
                <p className="discount-price">
                  R${" "}
                  {((product.price * (100 - product.discount)) / 100).toFixed(
                    2
                  )}
                </p>
                <p className="parcelas">
                  Ou 12x de R${" "}
                  {(
                    ((product.price * (100 - product.discount)) / 100 / 12) *
                    1.02
                  ).toFixed(2)}
                </p>
              </S.DescriptionContainer>
            </S.CardDiv>
          </SwiperSlide>
        ))}
        <SwiperNavButton/>
      </S.SwiperContainer>
    </div>
  );
};

export default ProductsBanner;
