import React from "react";
import * as S from "./styles";

import { useCartContext } from "../../../../context/CartContext";
import { currencyFormat } from "../../../../helpers/currencyFormat";

import plusImg from "../../../../assets/img/circle-plus.svg";
import minusImg from "../../../../assets/img/circle-minus.svg";

import { FaTrashAlt } from "react-icons/fa";
import { ConfirmOrder } from "../../../../components/ConfirmOrder";

export function TableDesktop() {
  const {
    productsInCart,
    addAndEditProductsInCart,
    removeProductsInCart,
    removeProductFromCart,
  } = useCartContext();

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Produto</th>
            <th>BlackFriday</th>
            <th>QTD</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productsInCart.map((item) => (
            <tr key={`${item.name}`}>
              <td>
                <img src={item.img} />
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{currencyFormat(item.price)}</span>
              </td>
              <td>
              {item.blackFriday && <p>{item.discount}%</p>}
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    onClick={() => removeProductsInCart(item)}
                  >
                    <img src={minusImg} alt="Remover quantidade" />
                  </button>
                  <span>{`${item.qtd}`.padStart(2, "0")}</span>
                  <button
                    type="button"
                    onClick={() => addAndEditProductsInCart(item)}
                  >
                    <img src={plusImg} alt="Adicionar quantidade" />
                  </button>
                </div>
              </td>
              <td>
                {!item.blackFriday && (
                  <h5>{currencyFormat(item.price * item.qtd)}</h5>
                )}
                {item.blackFriday && (
                  <h5>
                    {currencyFormat(
                      ((item.price * (100 - item.discount)) / 100) * item.qtd
                    )}
                  </h5>
                )}
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeProductFromCart(item)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmOrder />
    </S.Container>
  );
}
