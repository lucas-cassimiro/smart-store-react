import * as S from "./styles";
import BlackFridayBanner from "../../assets/img/banner-airpods-black-friday.png";
import BannerWpp from "../../assets/img/banner-wpp.png";
import SwipperBannerHeader from "../../components/Swipers/swiperBannerHeader";
import SwiperBlackFridayProducts from "../../components/Swipers/swiperBlackFridayProducts";
import SwiperNewsProducts from "../../components/Swipers/swiperNewsProducts";

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
