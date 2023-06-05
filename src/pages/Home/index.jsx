import * as S from "./styles.js";
import BlackFridayBanner from "../../assets/img/banner-airpods-black-friday.png";
import BannerWpp from "../../assets/img/banner-wpp.png";
import SwipperBannerHeader from "../../components/Swipers/SwiperBannerHeader";
import SwiperNewsProducts from "../../components/Swipers/SwiperNewsProducts";
import SwiperBlackFridayProducts from "../../components/Swipers/SwiperBlackFridayProducts";
import { Head } from "../../components/Head/index.jsx";
import { BannerWppp, BannerNovidades } from "../../components/Banners/index.jsx";

const Home = () => {
  return (
    <S.HomeContainer>
      <Head title='Home'/>
      <SwipperBannerHeader />
      <SwiperNewsProducts />
      <S.BlackFriday>Black Friday</S.BlackFriday>
      <BannerNovidades/>
      <SwiperBlackFridayProducts />
      <BannerWppp/>
    </S.HomeContainer>
  );
};

export default Home;
