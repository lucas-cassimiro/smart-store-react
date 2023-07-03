import * as S from "./styles";

import CarrinhoVazio from "../../assets/img/carrinho-vazio.jpeg";

interface EmptyProps {
  title: string
}

export function EmptyCart({ title }: EmptyProps) {
  return (
    <S.Container>
      <h2>{title}</h2>
      <S.Button to="/">Ir para início</S.Button>
      <img src={CarrinhoVazio} />
    </S.Container>
  );
}
