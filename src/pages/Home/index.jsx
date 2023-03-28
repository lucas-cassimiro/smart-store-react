import * as S from "./styles";
import Banner from "../../components/banner";
import News from "../../components/news";
import BlackFridayBanner from "../../assets/img/banner-airpods-black-friday.png";
import ProductsBanner from "../../components/products";

const Home = () => {
  return (
    <S.HomeContainer>
      <Banner />
      <News />
      <S.BlackFriday>Black Friday</S.BlackFriday>
      <S.BlackFridayBannerImage src={BlackFridayBanner} alt="Banner Black Friday" />
      <ProductsBanner />
    </S.HomeContainer>
  );
};

export default Home;
