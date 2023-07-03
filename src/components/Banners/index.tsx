import ImageBanner from "../../assets/img/banner-wpp.png";
import BannerBlackFriday from "../../assets/img/banner-airpods-black-friday.png"
import * as S from "./styles";

const BannerNovidades = () => {
    return (
        <>
            <S.Container> 
                <S.Img src={BannerBlackFriday}/>
            </S.Container>
        </>
    )
}

const BannerWppp = () => {
    return (
        <>
            <S.ContainerWpp> 
                <S.Img src={ImageBanner}/>
            </S.ContainerWpp>
        </>
    )
}

export { BannerWppp, BannerNovidades }