import React from "react";
import Filtro from "../../components/filtro";
import celulares from "./dataProductsIphone";
import { CardProducts } from "../../components/cardProducts";

const IPhones = () => {
  return (
    <section>
      <Filtro />
      <div>
          {   
            celulares.map(element => {
              <CardProducts product={element}/>
            })
          
          
          
          }
      </div>
    </section>
  );
};

export default IPhones;
