import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import * as S from "./styles";
import { NewsData } from "./newsData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const News = () => {
  return (
    <S.SectionNovidades>
      <S.Novidades>Novidades</S.Novidades>

      <S.SwiperContainer
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        // autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
       {NewsData.map(data => (
          <SwiperSlide>
          <S.ContainerProducts>
            <div>
              <img
                src={data.img}
                alt={data.name}
              />
            </div>
            <h2>{data.name}</h2>

            <p>
              A partir de <span>R$ {data.price}</span>
            </p>
          </S.ContainerProducts>
       </SwiperSlide>
       ))}
      </S.SwiperContainer>
    </S.SectionNovidades>
  );
};

export default News;
