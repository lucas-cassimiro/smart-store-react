import React from "react";
import { Head } from "../../components/Head/index.jsx";
import * as S from "./styles";
import { Table } from "./Table";

const Cart = () => {
  return (
    <S.Content>
      <Head title="Carrinho" />

      <h1>
        <strong>Você está em: </strong>carrinhos
      </h1>

      <S.Container>
        <Table />
      </S.Container>
    </S.Content>
  );
};

export default Cart;
