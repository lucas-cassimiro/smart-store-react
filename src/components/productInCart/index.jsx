import React from "react";
import * as S from "./styles";
import { useCartContext } from "../../context/CartContext";
import { currencyFormat } from "../../helpers/currencyFormat";

const ProductInCart = ({ product }) => {
  const calcularDesconto = (item) => {
    const descontoCalculado = (item.price * (100 - item.discount)) / 100;

    return descontoCalculado;
  };

  if (product.blackFriday) {
    const valorComDesconto = calcularDesconto(product);

    console.log(valorComDesconto);
    product.priceWithDisc = valorComDesconto;
  }

  console.log(product.price);

  const {
    addAndEditProductsInCart,
    removeProductsInCart,
    removeProductFromCart,
    totalValue,
  } = useCartContext();

  return (
    <S.RecipientProduct>
      <S.ContainerProduct>
        <S.ImageProduct src={product.img} />
        <S.NameProduct>{product.name}</S.NameProduct>
        <S.Button onClick={() => removeProductsInCart(product)}>-</S.Button>
        <S.Input type="text" value={product.qtd}></S.Input>
        <S.Button onClick={() => addAndEditProductsInCart(product)}>+</S.Button>
        <S.Button onClick={() => removeProductFromCart(product)}>X</S.Button>
        {!product.blackFriday && <p>Preço: {currencyFormat(product.price * product.qtd)}</p>}
        {product.blackFriday && <p>Preço: {currencyFormat(product.priceWithDisc * product.qtd)}</p>}
      </S.ContainerProduct>
    </S.RecipientProduct>
  );
};

export default ProductInCart;
