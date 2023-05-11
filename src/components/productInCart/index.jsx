import React from "react";
import * as S from "./styles";
import { useCartContext } from "../../context/CartContext";

const ProductInCart = ({ product }) => {

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
        <p>Preço: {product.value}</p>
      </S.ContainerProduct>
    </S.RecipientProduct>
  );
};

export default ProductInCart;
