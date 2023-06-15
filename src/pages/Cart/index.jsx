// import ProductInCart from "../../components/productInCart";
// import { useCartContext } from "../../context/CartContext";
import { Head } from "../../components/Head/index.jsx";
import * as S from "./styles";
// import { useEffect, useState } from "react";
import { Table } from "./Table";

const Cart = () => {
  // const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth)

  // const { productsInCart } = useCartContext();

  // useEffect(() => {
  //   function updateTableComponentBasedInWindowWidth(){
  //     const currentWidth = document.documentElement.clientWidth
  //     setWindowWidth(currentWidth)
  //   }
  // }, [])

  // return (
  //   <>
  //     <Head title="Carrinho" />
  // <h3>
  //   <strong>Você está em: </strong>carrinhos
  // </h3>

  //     <>
  //       <S.ContainerProduct>
  //         {productsInCart.length >= 1 && <ProductInCart />}
  //       </S.ContainerProduct>
  //     </>

  //     {productsInCart.length == 0 && (
  //       <>
  //         <p>O seu carrinho ainda se encontra vazio!</p>
  //       </>
  //     )}
  //   </>
  // );

  return (
    <>
      <Head title="Carrinho" />
      <h3>
        <strong>Você está em: </strong>carrinhos
      </h3>

      <S.Container>
        <Table />
      </S.Container>
    </>
  );
};

export default Cart;
