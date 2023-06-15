import React from "react";
import * as S from "./styles";

import { useCartContext } from "../../context/CartContext";
import { currencyFormat } from "../../helpers/currencyFormat";

export function ConfirmOrder() {
  const { productsInCart } = useCartContext();

  const totalAmount = productsInCart.reduce((acc, item) => {
    if (item.blackFriday) {
      return (acc += ((item.price * (100 - item.discount)) / 100) * item.qtd);
    } else if (!item.blackFriday) {
      return (acc += item.price * item.qtd);
    }
  }, 0);

  return (
    <S.Container>
      <button type="button">Finalizar Pedido</button>
      <span>
        Total <strong>{currencyFormat(totalAmount)}</strong>
      </span>
    </S.Container>
  );
}
