import * as S from "./styles.js";
import BlackFridayBanner from "../../assets/img/banner-airpods-black-friday.png";
import BannerWpp from "../../assets/img/banner-wpp.png";
import SwipperBannerHeader from "../../components/Swipers/SwiperBannerHeader";
import SwiperNewsProducts from "../../components/Swipers/SwiperNewsProducts";
import SwiperBlackFridayProducts from "../../components/Swipers/SwiperBlackFridayProducts";

const Home = () => {
  return (
    <S.HomeContainer>
      <SwipperBannerHeader />
      <SwiperNewsProducts />
      <S.BlackFriday>Black Friday</S.BlackFriday>
      <S.BlackFridayBannerImage
        src={BlackFridayBanner}
        alt="Banner Black Friday"
      />
      <SwiperBlackFridayProducts />
      <S.BannerWpp src={BannerWpp} />
    </S.HomeContainer>
  );
};

export default Home;
