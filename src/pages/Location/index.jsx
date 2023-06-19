import { useState, useEffect } from "react";
// import * as S from "/styles.js"
import getAddress from "../../services/handleApi";

import * as S from "./styles"


export function Location(){
  const [inputCep, setInputCep] = useState("")
  const [cep, setCep] = useState({})
  const [error, setError] = useState(false)


  if(cep.uf === "SP" || cep.uf === "RJ"){
     cep.price = 25
  }


  console.log(cep)


  async function handleCepChange(event){
    event.preventDefault()
    try{
      const cepInformado = event.target.cep.value
      const cepRecebido = await getAddress(cepInformado)
      setCep(cepRecebido)
      setError()
    }catch(error){
      setError(error)
    }
  }

    return (
        <div>
                  <form onSubmit={handleCepChange}>
                      <label htmlFor="">Informe um cep: </label>
                      <input name="cep" value={inputCep} onChange={(e) => setInputCep(e.target.value)}/>
                  </form>

                {error && <p>erro</p>}
                {!error && <p>{cep.logradouro}</p>}
                {!error && <p>{cep.bairro}</p>}
                {!error && <p>{cep.localidade}</p>}
                {!error && <p>{cep.cep}</p>}  
                {!error && <p>{cep.uf}</p>}
                {!error && <p>{cep.ddd}</p>}
                {!error && <p>O valor para {cep.uf} é {cep.price}</p>}
          </div>
    )
}