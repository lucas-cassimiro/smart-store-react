import "./styles.css";
import * as S from "./styles"
import IconLocalizaçao from "../../assets/img/icon-localizacao.png";
import IconCarrinho from "../../assets/img/shopping.png";
import IconLogin from "../../assets/img/login.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <S.HeaderContainer>
      <div class="topo-header">
        <div class="tittle-header">
          <span>
            A melhor franquia de smartphones do
            <span class="brasil-yellow"> Brasil</span>
          </span>
        </div>

        <div class="tittle-header-2">
          <a href="#">
            <strong>SEJA UM REVENDEDOR</strong>
          </a>
        </div>
      </div>

      <div class="topo-header-2">
        <div class="localizacao">
          <img src={IconLocalizaçao} alt="Icone de localização" />

          <a href="#">Selecione uma localização</a>
        </div>

        <h1 class="logo">Smart Store</h1>

        <div class="container-carrinho-login">
          <div class="carrinho">
            <picture class="topo-carrinho">
              <img
                src={IconCarrinho}
                alt="Imagem do carrinho"
                class="img-carrinho"
              />
            </picture>
            <div class="rodape-carrinho">
              <a href="#">Cart</a>
            </div>
          </div>

          <div class="login">
            <div class="topo-login">
              <img src={IconLogin} alt="Imagem do login" class="img-login" />
            </div>

            <div class="rodape-login">
              <a href="#">Login</a>
            </div>
          </div>
        </div>
      </div>

      <nav class="header-navegation">
        <ul class="header-menu">
          <li>
            <NavLink to='/iphones'>iPhone</NavLink>
          </li>
          <li>
            <a href="#">Android</a>
          </li>
          <li>
            <a href="#">Smartwatch</a>
          </li>
          <li>
            <a href="#">Fones bluetooth</a>
          </li>
          <li>
            <a href="#">Blackfriday</a>
          </li>
        </ul>
      </nav>
    </S.HeaderContainer>
  );
};

export default Header;
