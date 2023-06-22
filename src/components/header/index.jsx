import * as S from "./styles";
import IconLocalizaçao from "../../assets/img/icon-localizacao.png";
import IconCarrinho from "../../assets/img/icon-cart.png";
import IconLogin from "../../assets/img/icon-login.png";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import IconHamburguer from "../../assets/img/menu-hamburguer.jpg"
import { FaBars } from 'react-icons/fa'
import { useState } from "react";
import Sidebar from "../Sidebar";
import Localizacao from "../Localizacao";


const Header = () => {
  const {productsInCart} = useCartContext()

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)




  const [location, setLocation] = useState(false)

  const showLocation = () => setLocation(!location)



  return (
    <S.HeaderContainer>
      <S.TopoHeader>
          <p>
            A melhor franquia de smartphones do<span>Brasil</span>
          </p>

      
          <a href="#">SEJA UM REVENDEDOR</a>
       
      </S.TopoHeader>

      <S.MeioHeader>
        <S.Localizacao>
        <img src={IconLocalizaçao} alt="Icone de localização" />


      
        <a onClick={showLocation}>
          Selecione uma localização
          </a>
        {location && <Localizacao active={setLocation}/>}
        

        </S.Localizacao>
       <S.Logo>
          <h1><Link to={"/"}>Smart Store</Link></h1>
        </S.Logo>
        

        <S.CarrinhoELogin>
          <S.IconContainer>
            <S.IconsLink to={"/cart"}>
              <div>

            <S.BagQtd>{productsInCart.length}</S.BagQtd>
              <img
                src={IconCarrinho}
                alt="Imagem do carrinho"
                class="img-carrinho"
                
              />
              </div>
            </S.IconsLink>
            </S.IconContainer>

            {/* <S.IconContainer>
            <S.IconsLink to={"/"}>
              <img src={IconLogin} alt="Imagem do login" class="img-login" />

              <p>Login</p>
            </S.IconsLink>
          </S.IconContainer> */}
        </S.CarrinhoELogin>
      </S.MeioHeader>

      <S.Navigation>
        <button>
          <FaBars onClick={showSidebar}/>
          {sidebar && <Sidebar active={setSidebar}/>} 
        </button>
        <ul>
          <li>
            <S.NavigationLink to="/iphones">iPhones</S.NavigationLink>
          </li>
          <li>
            <S.NavigationLink to="/android">Androids</S.NavigationLink>
          </li>
          <li>
            <S.NavigationLink to="/smartwatch">Smartwatchs</S.NavigationLink>
          </li>
          <li>
            <S.NavigationLink to="/fones-de-ouvido">Fones bluetooth</S.NavigationLink>
          </li>
          <li>
            <S.NavigationLink to="/blackfriday">Black Friday</S.NavigationLink>
          </li>
        </ul>
      </S.Navigation>
    </S.HeaderContainer>
  );
};

export default Header;
