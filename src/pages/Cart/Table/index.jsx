import { useEffect, useState } from "react";
import { useCartContext } from "../../../context/CartContext";

import { TableDesktop } from "./TableDesktop";
import { TableMobile } from "./TableMobile";
import { EmptyCart } from "../../../components/EmptyCart";

export function Table() {
  const { productsInCart } = useCartContext();
  const [windowWidth, setWindowWidth] = useState(
    document.documentElement.clientWidth
  );

  useEffect(() => {
    function updateTableComponentBasedInWindowWidth() {
      const currentWidth = document.documentElement.clientWidth;
      setWindowWidth(currentWidth);
    }
    window.addEventListener("resize", updateTableComponentBasedInWindowWidth);

    return () => {
      window.removeEventListener(
        "resize",
        updateTableComponentBasedInWindowWidth
      );
    };
  }, []);

  if (productsInCart.length === 0)
    return <EmptyCart title="Ops! Seu carrinho está vazio" />;

  return windowWidth > 768 ? <TableDesktop /> : <TableMobile />;
}
