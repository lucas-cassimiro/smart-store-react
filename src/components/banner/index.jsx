import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import SecondBanner from "../../assets/img/samsung-banner.png"
import FirstBanner from "../../assets/img/banner-iphone-14.png"
import ThirdBanner from "../../assets/img/airpods-banner.png"
import FourthBanner from "../../assets/img/applewatch-banner.png"
import * as S from "./styles"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Banner = () => {
    return (
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          
          autoplay={{delay: 4000, disableOnInteraction: false}}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img src={FirstBanner} alt="Imagem logo banner" /></SwiperSlide>
          <SwiperSlide><img src={SecondBanner} alt="Imagem logo banner"/></SwiperSlide>
          <SwiperSlide><img src={ThirdBanner} alt="Imagem logo banner" /></SwiperSlide>
          <SwiperSlide><img src={FourthBanner} alt="Imagem logo banner" /></SwiperSlide>
          ...
        </Swiper>

        


      );
}

export default Banner