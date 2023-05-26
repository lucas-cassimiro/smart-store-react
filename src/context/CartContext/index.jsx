import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState([]);

  const addAndEditProductsInCart = (product) => {
    setProductsInCart((prevCart) => {
      const itemIndex = prevCart.findIndex(
        (item) => item.name === product.name
      );

      if (itemIndex >= 0) {
        return prevCart.map((item, index) => {
          if (index === itemIndex && item.blackFriday === true) {
            const qtd = item.qtd + 1
            const descontoCalculado = item.price * item.discountPercentage
            const valorDescontadoAtualizado = item.price - descontoCalculado

            return { ...item, qtd: qtd, value: valorDescontadoAtualizado * qtd}
          }
            return item;
        });
      } else {
          const descontoCalculado = product.price * product.discountPercentage
          const valorDescontadoAtualizado = product.price - descontoCalculado

          return [...prevCart, { ...product, qtd: 1, value: valorDescontadoAtualizado }];
      }
    });
  };

  const removeProductsInCart = (product) => {
    setProductsInCart((prevCart) => {
      const itemIndex = prevCart.findIndex(
        (item) => item.name === product.name
      );

      if (itemIndex >= 0) {
        return prevCart.map((item, index) => {
          if (index === itemIndex) {
            if (item.qtd > 1) {
              const qtd = item.qtd - 1;
              // const removeValue = item.value - item.valorDescontadoAtualizado

              return { ...item, qtd: qtd };
            } else {
              return item;
            }
          } else {
            return item;
          }
        });
      } else {
        return [...prevCart];
      }
    });
  };

  const removeProductFromCart = (product) => {
    setProductsInCart((prevCart) =>
      prevCart.filter((item) => {
        return item.name !== product.name
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        productsInCart,
        addAndEditProductsInCart,
        removeProductsInCart,
        removeProductFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    console.log("context not found!");
  }

  return context;
};
