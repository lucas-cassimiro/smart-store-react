import * as S from "./styles"



const News = () => {
    return (
        <S.SectionNovidades>
        <S.Novidades>Novidades</S.Novidades>

        <S.Mostruario>
            <button class="btn botao-voltar control arrow-left">
                <img src="/src/img/seta-voltar.png" alt="/"/>
            </button>

            <div class="container-list">
                <ul class="list-itens">
                    <li class="card items slide">
                        <div class="alinhar img1">
                            <img src="src/img/mi-band-4.png" alt="Imagem do Mi Band 4" class="band-img"/>
                        </div>
                        <h2>Mi Band 4</h2>
                        <p>A partir de <span class="price">R$199,99</span></p>
                    </li>

                    <li class="card items slide">
                        <div class="alinhar img2">
                            <img src="src/img/amazing-bip-lite.png" alt="Imagem do Amazfit bip lite" class="amazfit-img"/>
                        </div>
                        <h2>Amazfit Bip Lite</h2>
                        <p>A partir de <span class="price">R$299,99</span></p>
                    </li>

                    <li class="card items slide terceiro">
                        <div class="alinhar img3">
                            <img src="src/img/samsung-watch.png" alt="Imagem do Samsung Watch" class="watch-img"/>
                        </div>
                        <h2>Samsung Watch</h2>
                        <p>A partir de <span class="price">R$599,99</span></p>
                    </li>

                    <li class="card items ultimos">
                        <div class="alinhar img4">
                            <img src="src/img/echo-dot.png" alt="Imagem do Samsung Watch" class="watch-img"/>
                        </div>
                        <h2>Echo Dot</h2>
                        <p>A partir de <span class="price">R$599,99</span></p>
                    </li>

                    <li class="card items ultimos">
                        <div class="alinhar img5">
                            <img src="src/img/controle.png" alt="Imagem do Samsung Watch" class="watch-img"/>
                        </div>
                        <h2>Fire Stick TV e 4K</h2>
                        <p>A partir de <span class="price">R$599,99</span></p>
                    </li>

                    <li class="card items ultimos">
                        <div class="alinhar img6">
                            <img src="src/img/projetor-samsung.png" alt="Imagem do Samsung Watch" class="watch-img"/>
                        </div>
                        <h2>Projetores Samsung</h2>
                        <p>A partir de <span class="price">R$599,99</span></p>
                    </li>
                </ul>
            </div>

            <button class="btn botao-avancar control arrow-right">
                <img src="/src/img/seta-voltar.png" alt=""/>
            </button>
        </S.Mostruario>
    </S.SectionNovidades>
    )
}

export default News