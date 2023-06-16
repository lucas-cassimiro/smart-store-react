import { Container } from "@mui/material";
import * as S from "./styles";

import CarrinhoVazio from "../../assets/img/carrinho-vazio.jpeg";

export function EmptyCart({ title }) {
  return (
    <S.Container>
      <h2>{title}</h2>
      <S.Button to="/">Ir para início</S.Button>
      <img src={CarrinhoVazio} />
    </S.Container>
  );
}
