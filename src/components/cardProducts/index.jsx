import React from "react";
import * as S from "./styles.js";
import HalfRating from "../rating/index.jsx";
import { useCartContext } from "../../context/CartContext/index.jsx";
import { currencyFormat } from "../../helpers/currencyFormat.js";

import { BsFillCartPlusFill } from "react-icons/bs";

const CardProducts = ({ product }) => {
  const { addAndEditProductsInCart, removeProductsInCart } = useCartContext();

  return (
    <S.CardDiv>
      <S.Images src={product.img} alt={product.name} />
      <S.DescriptionContainer>
        <div>
          {product.blackFriday && <p>-{product.discount}%</p>}
          {product.blackFriday && <p className="black-friday">Black Friday</p>}
        </div>
        <h4>{product.name}</h4>
        <h4>{product.storage} GB</h4>
        <HalfRating star={product.rating} />

        {product.blackFriday && (
          <p className="real-price">{currencyFormat(product.price)}</p>
        )}

        {product.blackFriday && (
          <S.Carrinho>
            <p className="discount-price">
              {currencyFormat(
                ((product.price * (100 - product.discount)) / 100).toFixed(2)
              )}
            </p>
            <S.Button
              type="button"
              onClick={() => addAndEditProductsInCart(product)}
            >
              <BsFillCartPlusFill />
            </S.Button>
          </S.Carrinho>
        )}

        {!product.blackFriday && (
          <S.Carrinho>
            <p className="discount-price">{currencyFormat(product.price)}</p>
            <S.Button 
              type="button"
              onClick={() => addAndEditProductsInCart(product)}>
              <BsFillCartPlusFill />
            </S.Button>
          </S.Carrinho>
        )}

        {!product.blackFriday && (
          <p className="parcelas">
            Ou 12x de {currencyFormat(product.price / 12)}
          </p>
        )}
        {product.blackFriday && (
          <p className="parcelas">
            Ou 12x de{" "}
            {currencyFormat(
              (product.price * (100 - product.discount)) / 100 / 12
            )}
          </p>
        )}
      </S.DescriptionContainer>
    </S.CardDiv>
  );
};

export default CardProducts;
