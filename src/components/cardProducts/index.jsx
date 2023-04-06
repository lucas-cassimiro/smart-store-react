import React from "react";
import * as S from "./styles.js";
import HalfRating from "../rating/index.jsx";

const CardProducts = ({ product }) => {
  return (
    <S.CardDiv>
      <S.Images src={product.img} alt={product.name} />
      <S.DescriptionContainer>
        <div>
          <p>-{product.discount}%</p>
          <p className="black-friday">Black Friday</p>
        </div>
        <h4>{product.name}</h4>
        <HalfRating star={product.rating} />
        <p className="real-price">R$ {product.price}</p>
        <p className="discount-price">
          R$ {((product.price * (100 - product.discount)) / 100).toFixed(2)}
        </p>
        <p className="parcelas">
          Ou 12x de R${" "}
          {(
            ((product.price * (100 - product.discount)) / 100 / 12) *
            1.02
          ).toFixed(2)}
        </p>
      </S.DescriptionContainer>
    </S.CardDiv>
  );
};

export default CardProducts;