import IconFacebook from "../../assets/img/icon-facebook.png";
import IconInstagram from "../../assets/img/icon-instagram.png";
import IconTwitter from "../../assets/img/icon-twitter.png";
import IconTiktok from "../../assets/img/icon-tiktok.png";
import IconBaixeAqui from "../../assets/img/icone-baixe-aqui.svg"

import * as S from "./styles"

const Footer = () => {
  return (
    <S.Container>
      <ul>
        <li>
          <a href="#">
            Nossas lojas
          </a>
        </li>
        <li>
          <a href="#">
            Suporte
          </a>
        </li>
        <li>
          <a href="#">
            Minha conta
          </a>
        </li>
        <li>
          <a href="#">
            Serviços
          </a>
        </li>
      </ul>

      <ul>
      <div>
        <h1>Institucional</h1>
      </div>
      <div className="div">
        <div>
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
        </div>
        <div>
        <li>
            <a href="">Fale Conosco</a>
          </li>
          <li>
            <a href="">Trocas e Devoluções</a>
          </li>
          <li>
            <a href="">Políticas de Privacidade</a>
          </li>
          <li>
            <a href="">Trabalhe Conosco</a>
          </li>
          <li>
            <a href="">Assistência Técnica</a>
          </li>
          <li>
            <a href="">Black Friday</a>
          </li>
        </div>

      </div>
      </ul>

      <div>
        <h2>Sac 4002-8922</h2>
        <span>Segunda a sexta das 08h às 20h</span>
        <span>Sábados das 08h às 19h</span>
      </div>

      <div>
        <h2>Redes sociais</h2>
        <div>
          <img src={IconFacebook}/>
          <img src={IconInstagram}/>
          <img src={IconTwitter}/>
          <img src={IconTiktok}/>
        </div>
        <h3>App Smart fidelidade</h3>
        <img src={IconBaixeAqui}/>
      </div>
    </S.Container>
  );
};

export default Footer;
