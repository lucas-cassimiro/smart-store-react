import * as S from "./styles";
import IconLocalizaçao from "../../assets/img/icon-localizacao.png";
import IconCarrinho from "../../assets/img/icon-cart.png";
import IconLogin from "../../assets/img/icon-login.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.TopoHeader>
        <p>
          A melhor franquia de smartphones do
          <span>Brasil</span>
        </p>

        <a href="#">SEJA UM REVENDEDOR</a>
      </S.TopoHeader>

      <S.MeioHeader>
        <S.Localizacao>
          <img src={IconLocalizaçao} alt="Icone de localização" />

          <a href="#">Selecione uma localização</a>
        </S.Localizacao>

        <h1>
          <Link to={"/"}>Smart Store</Link>
        </h1>

        <S.CarrinhoELogin>
          <S.IconContainer>
            <S.IconsLink to={"/"}>
              <img
                src={IconCarrinho}
                alt="Imagem do carrinho"
                class="img-carrinho"
              />

              <p>Cart</p>
            </S.IconsLink>
          </S.IconContainer>

          <S.IconContainer>
            <S.IconsLink to={"/"}>
              <img src={IconLogin} alt="Imagem do login" class="img-login" />

              <p>Login</p>
            </S.IconsLink>
          </S.IconContainer>
        </S.CarrinhoELogin>
      </S.MeioHeader>

      <S.Navigation>
        <ul>
          <li>
            <S.NavigationLink to="/iphones">iPhone</S.NavigationLink>
          </li>
          <li>
            <S.NavigationLink to="/android">Android</S.NavigationLink>
          </li>
          <li>
            <S.NavigationLink to="/smartwatch">Smartwatch</S.NavigationLink>
          </li>
          <li>
            <S.NavigationLink to="/fones-de-ouvido">
              Fones bluetooth
            </S.NavigationLink>
          </li>
          <li>
            <S.NavigationLink to="/blackfriday">Blackfriday</S.NavigationLink>
          </li>
        </ul>
      </S.Navigation>
    </S.HeaderContainer>
  );
};

export default Header;
