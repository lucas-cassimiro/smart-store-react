import {SwiperSlide} from "swiper/react"
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import FirstBanner from "../../assets/img/banner-iphone-14.png"
import SecondBanner from "../../assets/img/samsung-banner.png"
import ThirdBanner from "../../assets/img/airpods-banner.png"
import FourthBanner from "../../assets/img/applewatch-banner.png"
import * as S from "./styles"


const Banner = () => {
    return (
        <S.SwiperContainer
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{delay: 4000, disableOnInteraction: false}}
          pagination={{ clickable: true }}

        >
          <SwiperSlide><img src={FirstBanner} alt="Imagem logo banner" /></SwiperSlide>
          <SwiperSlide><img src={SecondBanner} alt="Imagem logo banner"/></SwiperSlide>
          <SwiperSlide><img src={ThirdBanner} alt="Imagem logo banner" /></SwiperSlide>
          <SwiperSlide><img src={FourthBanner} alt="Imagem logo banner" /></SwiperSlide>
       

   

        </S.SwiperContainer>

      );
}

export default Banner