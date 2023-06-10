import { SwiperSlide } from "swiper/react";
import Swiper, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import * as S from "./styles";
import { NewsData } from "./newsProductsData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperSwitchButton from "../SwiperSwitchButton";

const SwiperNewsProducts = () => {

  return (
    <S.SectionNovidades>
      <S.Novidades>Novidades</S.Novidades>

      <S.SwiperContainer

      
        breakpoints={
          {
            320: {
              spaceBetween: 15,
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 41,
              pagination: false
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
              pagination: false
            },
            1366: {
              slidesPerView: 3,
              spaceBetween: 41,
              pagination: false
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 50,
              pagination: false
            },
            1920: {
              slidesPerView: 3
            }
          }
        }

        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        speed={1000}
        pagination={{ clickable: true }}
      >
        {NewsData.map((data) => (
          <SwiperSlide key={data.name}>
            <S.ContainerProducts>
              <div>
                <S.Img src={data.img} alt={data.name} />
              </div>
              <h2>{data.name}</h2>
              <p>
                A partir de <span>R${data.price}</span>
              </p>
            </S.ContainerProducts>
          </SwiperSlide>
        ))}
        <SwiperSwitchButton />
      </S.SwiperContainer>
    </S.SectionNovidades>
  );
};

export default SwiperNewsProducts;
