import "./styles.css"
import IconFacebook from "../../assets/img/icone-facebook.png"
import IconInstagram from "../../assets/img/icone-instagram.png"
import IconTwitter from "../../assets/img/icone-twitter.png"
import IconTiktok from "../../assets/img/icone-tiktok.png"

const Footer = () => {
    return (
        <footer class="container-rodape">
            <ul class="lista-rodape">
                <li class="div-li">
                    <a href="#" class="service">Nossas lojas</a>
                </li>
                <li class="div-li">
                    <a href="#" class="service">Suporte</a>
                </li>
                <li class="div-li">
                    <a href="#" class="service">Minha conta</a>
                </li>
                <li class="div-li">
                    <a href="#" class="service">Serviços</a>
                </li>
            </ul>

            <div class="institucional">
                <div class="div-li-institucional">
                    <h2 class="tittle-institucional">Institucional</h2>
                </div>
                <div class="lista-institucional">
                    <ul>
                        <li><a href="">Sobre</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Canal Educativo</a></li>
                        <li><a href="">Canal Corporativo</a></li>
                        <li><a href="">Representantes</a></li>
                        <li><a href="">Condições de Frete</a></li>
                    </ul>
                    <ul>
                        <li><a href="">Fale Conosco</a></li>
                        <li><a href="">Trocas e Devoluções</a></li>
                        <li><a href="">Políticas de Privacidade</a></li>
                        <li><a href="">Trabalhe Conosco</a></li>
                        <li><a href="">Assistência Técnica</a></li>
                        <li><a href="">Black Friday</a></li>
                    </ul>
                </div>
            </div>
            <div class="numero">
                <h3 class="sac">Sac 4002-8922</h3>
                <p class="dias">Segunda a sexta das 08h às 20h</p>
                <p class="dias">Sábados das 08h às 19h</p>
            </div>
            <div class="redes-sociais">
                <h3 class="tittle-redes-sociais">Redes sociais</h3>
                <div class="icones-redes-sociais">
                    <a href="#">
                        <img src={IconFacebook} alt=""/>
                    </a>
                    <a href="#">
                        <img src={IconInstagram} alt=""/>
                    </a>
                    <a href="#">
                        <img src={IconTwitter} alt=""/>
                    </a>
                    <a href="#">
                        <img src={IconTiktok} alt=""/>
                    </a>
                </div>
                <h4 class="app-smart">App Smart fidelidade</h4>
                <a href="#" class="baixe-aqui">
                    <img src="/src/img/icone-baixe-aqui.svg" alt=""/>
                </a>
            </div>

        </footer>


    )
}

export default Footer;