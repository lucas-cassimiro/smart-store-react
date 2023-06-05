import "./styles.css";
import IconFacebook from "../../assets/img/icon-facebook.png";
import IconInstagram from "../../assets/img/icon-instagram.png";
import IconTwitter from "../../assets/img/icon-twitter.png";
import IconTiktok from "../../assets/img/icon-tiktok.png";
import * as S from "./styles"

const Footer = () => {
  return (
    <S.Container>
      <S.Ul class="lista-rodape">
        <S.Li class="div-li">
          <S.Navegation href="#" class="service">
            Nossas lojas
          </S.Navegation>
        </S.Li>
        <S.Li class="div-li">
          <S.Navegation href="#" class="service">
            Suporte
          </S.Navegation>
        </S.Li>
        <S.Li class="div-li">
          <S.Navegation href="#" class="service">
            Minha conta
          </S.Navegation>
        </S.Li>
        <S.Li class="div-li">
          <S.Navegation href="#" class="service">
            Serviços
          </S.Navegation>
        </S.Li>
      </S.Ul>

    
      <S.Ul>
      <div>
        <S.Tittle>Institucional</S.Tittle>
      </div>
        <li>
          <a href="">Sobre</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">Canal Educativo</a>
        </li>
        <li>
          <a href="">Canal Corporativo</a>
        </li>
        <li>
          <a href="">Representantes</a>
        </li>
        <li>
          <a href="">Condições de Frete</a>
        </li>
      </S.Ul>
    



      
    </S.Container>
  );
};

export default Footer;
