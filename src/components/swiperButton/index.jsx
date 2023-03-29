import { useSwiper } from "swiper/react";
import SetaVoltar from "../../assets/img/seta-voltar.png"
import * as S from "./styles"
import React from "react";

const SwiperNavButton = () => {
    const swiper = useSwiper()

    return(
        <div>
            <S.ButtonLeft onClick={() => swiper.slidePrev()}><img src={SetaVoltar} alt="Seta de voltar"/></S.ButtonLeft>
            <S.ButtonRight onClick={() => swiper.slideNext()}><S.SetaAvancar src={SetaVoltar} alt="Seta de avançar"/></S.ButtonRight>
        </div>
    )
}

export default SwiperNavButton