import React from "react";
import Filtro from "../../components/filtro";
import celulares from "./dataProductsIphone";
import { CardProducts } from "../../components/cardProducts";

const IPhones = () => {

  return (
    <section style={{display: "flex"}}>
      <Filtro />
      <div style={{display: "flex", flexWrap:"wrap"}}>
        {celulares.map((celular) => (
          <CardProducts product={celular} key={celular.name}/>
        ))}
      </div>
    </section>
  );
};

export default IPhones;
