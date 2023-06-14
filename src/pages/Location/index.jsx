import { useState, useEffect } from "react";
// import * as S from "/styles.js"
import getAddress from "../../services/handleApi";

export function Location(){
  const [inputCep, setInputCep] = useState("")
  const [cep, setCep] = useState({})
  const [error, setError] = useState(false)

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
        <div className='App'>
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

      </div>
    )
}