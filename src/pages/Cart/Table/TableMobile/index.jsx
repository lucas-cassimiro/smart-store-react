import { useCartContext } from "../../../../context/CartContext";

import { currencyFormat } from "../../../../helpers/currencyFormat";

import plusImg from "../../../../assets/img/circle-plus.svg";
import minusImg from "../../../../assets/img/circle-minus.svg";

import { FaTrashAlt } from "react-icons/fa";

import * as S from "./style";
import { ConfirmOrder } from "../../../../components/ConfirmOrder";

export function TableMobile() {
  const {
    productsInCart,
    addAndEditProductsInCart,
    removeProductsInCart,
    removeProductFromCart,
  } = useCartContext();

  return (
    <S.Container>
      {productsInCart.map((item) => (
        <div key={`${item.name}`} className="order-item">
          <div>
            <img src={item.img} alt={item.name} />
          </div>
          <div>
            <h4>{item.name}</h4>
            <span>{currencyFormat(item.price)}</span>
            <div>
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
              <button type="button" onClick={() => removeProductFromCart(item)}>
                <FaTrashAlt />
              </button>
            </div>
            {item.blackFriday && (
              <h5>
                Subtotal
                <span>
                  {" "}
                  {currencyFormat(
                    ((item.price * (100 - item.discount)) / 100) * item.qtd
                  )}
                </span>
              </h5>
            )}
            {!item.blackFriday && (
              <h5>
                Subtotal<span> {currencyFormat(item.price * item.qtd)}</span>
              </h5>
            )}
          </div>
        </div>
      ))}
      <ConfirmOrder />
    </S.Container>
  );
}
