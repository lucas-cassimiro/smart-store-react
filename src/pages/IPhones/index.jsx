import React, { useState } from "react";
import * as S from "./styles";
import celulares from "./dataProductsIphone";
import CardProducts from "../../components/CardProducts";

const IPhones = () => {
  const [preco, setPreco] = useState("");
  const [armazenamento, setArmazenamento] = useState("");
  const [cor, setCor] = useState("");

  const handleChangePreco = (event) => {
    setPreco(event.target.value);
  };

  const handleChangeArmazenamento = (event) => {
    setArmazenamento(event.target.value);
  };

  const handleChangeCor = (event) => {
    setCor(event.target.value);
  };

  return (
    <section style={{display: "flex"}}>
      <Filtro />
      <div style={{display: "flex", flexWrap:"wrap"}}>
        {celulares.map((celular) => (
          <CardProducts product={celular} key={celular.name} />
        ))}
      </div>
    </section>
  );
};

export default IPhones;
