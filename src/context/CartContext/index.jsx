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
          if (index === itemIndex) {
            const qtd = item.qtd + 1
            const value = item.price * qtd
            return { ...item, qtd: qtd, value: value}
          }
          return item;
        });
      } else {
        return [...prevCart, { ...product, qtd: 1, value: product.price }];
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
              return { ...item, qtd: item.qtd - 1 };
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

  console.log(productsInCart)

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
