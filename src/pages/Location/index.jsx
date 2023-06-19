import { useState, useEffect } from "react";
// import * as S from "/styles.js"
import getAddress from "../../services/handleApi";

import * as S from "./styles"


export function Location() {
    const [inputCep, setInputCep] = useState("");
    const [error, setError] = useState(false);
    const [cep, setCep] = useState({});

    if (cep.uf === "SP" || cep.uf === "RJ") {
        cep.price = 25;
    }

    async function handleCepChange(event) {
        event.preventDefault();
        try {
            const cepInformado = event.target.cep.value;
            const cepRecebido = await getAddress(cepInformado);
            setCep(cepRecebido);
            setInputCep("");
            setError(false);
        } catch (error) {
            setInputCep("");
            setError(true);
        }
    }

    useEffect(() => {
        if (cep.uf === "SP" || cep.uf === "RJ") {
            setCep((prevCep) => ({
                ...prevCep,
                price: 25,
            }));
        }
    }, []);
  
    return (
      
        <div>
            <form onSubmit={handleCepChange}>
                <label htmlFor="">Informe um cep: </label>
                <input
                    name="cep"
                    value={inputCep}
                    onChange={(e) => setInputCep(e.target.value)}
                />
            </form>

            {Object.keys(cep).length > 0 && !error ? (
                <ul>
                    <li>{cep.logradouro}</li>
                    <li>{cep.bairro}</li>
                    <li>{cep.localidade}</li>
                    <li>{cep.cep}</li>
                    <li>{cep.uf}</li>
                    <li>{cep.ddd}</li>
                    {cep.uf === "SP" || cep.uf === "RJ" ? (
                        <li>
                            <p>
                                O valor para {cep.uf} é R$ {cep?.price} reais
                            </p>
                        </li>
                    ) : null}
                </ul>
            ) : (
                <p>Por favor, informe um cep</p>
            )}
        </div>
    );

}