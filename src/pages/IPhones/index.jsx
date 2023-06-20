// import React, { useEffect, useState } from "react";
// import * as S from "./styles";
// import celulares from "./iphoneProductsData.js";
// import CardProducts from "../../components/cardProducts";
// import { Head } from "../../components/Head/index.jsx";
// import FilterOrdered from "../../assets/img/ri-list-ordered.png"
// import { useCartContext } from "../../context/CartContext";

// const IPhones = () => {
//   const [preco, setPreco] = useState([]);
//   const [armazenamento, setArmazenamento] = useState([]);
//   const [cor, setCor] = useState([]);
//   const [filterValue, setFilterValue] = useState('')
//   const [filterName, setFilterName] = useState('')
//   const [display, setDisplay] = useState('')
//   const [produtos, setProdutos] = useState([]);
  
//   const handleChangePreco = (event) => {
//     if(preco.includes(event.target.value)){
//       const filtrado = preco.filter(valor => {
//         return valor != event.target.value 
//       })
//       return setPreco(filtrado)
//     }
//     setPreco(prev => [...prev, event.target.value])
//   };

//   const handleChangeArmazenamento = (event) => {
//     if (armazenamento.includes(event.target.value)) {
//       const filtrado = armazenamento.filter((valor) => {
//         return valor != event.target.value;
//       });
//       return setArmazenamento(filtrado);
//     }
//     setArmazenamento((prev) => [...prev, event.target.value]);
//   };

//   const handleChangeCor = (event) => {
//     if(cor.includes(event.target.value)){
//       const filtrado = cor.filter((valor) => {
//         return valor != event.target.value
//       })
//       return setCor(filtrado)
//     }
//     setCor((prev) => [...prev, event.target.value])
//   }

//   const handleFilterChange = (event) => {
//     setFilterValue(event.target.value)
//   }

//   const handleNameItem = (event) => {
//     setFilterName(event.target.value)
//   }

//   const handleDisplay = (event) => {
//     setDisplay(event.target.value)
//   }


//   const filterAll = (preco, armazenamento, cor, filterValue, filterName, display) => {
//     let novoArray = celulares;

//     var valorMin = []
//     var valorMax = []

//     preco.forEach(item => {
//         const precoSplit = item.split('-')

//         valorMin.push(precoSplit[0])
//         valorMax.push(precoSplit[1])
//     });

//     var valorMinOrder = valorMin.sort()
//     var valorMaxOrder = valorMax.sort()

    
//     if(preco.length > 0){
//       novoArray = novoArray.filter(procurando => {
//           return procurando.price > valorMinOrder[0] && procurando.price < valorMaxOrder[valorMaxOrder.length -1]
//       })
//     }

//     if (armazenamento.length > 0) {
//       novoArray = novoArray.filter((celular) => {
//         return armazenamento.some((valor) => {
//           return celular.storage.toString().includes(valor);
//         });
//       });
//     }

//     if(cor.length > 0){
//       novoArray = novoArray.filter((item) => {
//         return cor.some((valor) => {
//           return item.color.toLowerCase().includes(valor)
//         })
//       })
//     }

//     if(filterValue){
//       novoArray = novoArray.filter(procurado => {
//         return procurado.order === filterValue
//       })
//     }

//     if(filterName){
//      novoArray = novoArray.filter(item => {
//         return item.name.toLowerCase().includes(filterName.toLowerCase())
//      })
//     }

//     if(display){
//       novoArray = novoArray.slice(0, display)
//     }


//     console.log(novoArray)



//     setProdutos(novoArray);
//   };

//   useEffect(() => {
//     filterAll(preco, armazenamento, cor, filterValue, filterName, display);    
//   }, [preco]);

//   return (
//     <>
//         <S.ContainerFiltro>
//           <h1><strong>Você está em: </strong>iPhones</h1>
//           <div>
//               <label htmlFor="ordenar">Ordenar:</label>
//               <select id="ordenar" onChange={handleFilterChange}>
//                 <option value="">Selecione uma categoria</option>
//                 <option value="procurados">Mais procurados</option>
//                 <option value="recentes">Mais recentes</option>
//                 <option value="vendidos">Mais vendidos</option>
//               </select>
//               <label htmlFor="exibir">Exibir:</label>
//               <select name="exibir" id="exibir" onChange={handleDisplay}>
//                 <option value="20">20 por página</option>
//                 <option value="19">19 por página</option>
//                 <option value="18">18 por página</option>
//                 <option value="17">17 por página</option>
//                 <option value="16">16 por página</option>
//                 <option value="15">15 por página</option>
//                 <option value="14">14 por página</option>
//                 <option value="13">13 por página</option>
//                 <option value="12">12 por página</option>
//                 <option value="11">11 por página</option>
//                 <option value="10">10 por página</option>
//                 <option value="9">9 por página</option>
//                 <option value="8">8 por página</option>
//                 <option value="7">7 por página</option>
//                 <option value="6">6 por página</option>
//                 <option value="5">5 por página</option>
//                 <option value="4">4 por página</option>
//                 <option value="3">3 por página</option>
//                 <option value="2">2 por página</option>
//                 <option value="1">1 por página</option>
//               </select>
//               <input type="text" placeholder="Pesquisar na categoria" value={filterName} onChange={handleNameItem}/>
//             </div>
//          </S.ContainerFiltro>
         
//     <S.ContainerGlobal>
//       <Head title='iPhones'/>
//       <S.FiltroContainer>
//         <S.CategoriasRelacionadas>
//           <h2>Categorias relacionadas</h2>
//           <div>
//             <p>Androids</p>
//             <p>Smartwatchs</p>
//             <p>Fones bluetooth</p>
//             <p>Acessórios</p>
//           </div>
//         </S.CategoriasRelacionadas>
//         <S.FilterByPrice>
//           <img src={FilterOrdered}/>
//           <h2>Filtrar por:</h2>
//         </S.FilterByPrice>
//         <S.Filtro>
//           <h3>Preço</h3>
          
//           <label>
//             <input
//               type="checkbox"
//               name="preco"
//               value="0-1000"
//               checked={preco.includes('0-1000')}
//               onChange={handleChangePreco}
//             />
//             R$ 0 - R$1000
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="preco"
//               value="1001-2000"
//               checked={preco.includes('1001-2000')}
//               onChange={handleChangePreco}
//             />
//             R$ 1.001 - R$ 2.000
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="preco"
//               value="2001-3000"
//               checked={preco.includes('2001-3000')}
//               onChange={handleChangePreco}
//             />
//             R$ 2.001 - R$ 3.000
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="preco"
//               value="3001-4000"
//               checked={preco.includes('3001-4000')}
//               onChange={handleChangePreco}
//             />
//             R$ 3.001 - R$ 4.000
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="preco"
//               value="4001-5000"
//               checked={preco.includes('4001-5000')}
//               onChange={handleChangePreco}
//             />
//             R$ 4.001 - R$ 5.000
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="preco"
//               value="5001-6000"
//               checked={preco.includes('5001-6000')}
//               onChange={handleChangePreco}
//             />
//             R$ 5.001 - R$ 6.000
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="preco"
//               value="6001-7000"
//               checked={preco.includes('6001-7000')}
//               onChange={handleChangePreco}
//             />
//             R$ 6.001 - R$ 7.000
//           </label>
//         </S.Filtro>
//         <S.Filtro>
//           <h3>Armazenamento</h3>
//           <label>
//             <input
//               type="checkbox"
//               name="armazenamento"
//               value="64"
//               checked={armazenamento.includes("64")}
//               onChange={handleChangeArmazenamento}
//             />
//             64 GB
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="armazenamento"
//               value="128"
//               checked={armazenamento.includes("128")}
//               onChange={handleChangeArmazenamento}
//             />
//             128 GB
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="armazenamento"
//               value="256"
//               checked={armazenamento.includes("256")}
//               onChange={handleChangeArmazenamento}
//             />
//             256 GB
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="armazenamento"
//               value="512"
//               checked={armazenamento.includes("512")}
//               onChange={handleChangeArmazenamento}
//             />
//             512 GB
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="armazenamento"
//               value="1024"
//               checked={armazenamento.includes("1024")}
//               onChange={handleChangeArmazenamento}
//             />
//             1 TB
//           </label>
//         </S.Filtro>
//         <S.Filtro>
//           <h3>Cor</h3>
//           <label>
//             <input
//               type="checkbox"
//               name="cor"
//               value="azul"
//               checked={cor.includes("azul")}
//               onChange={handleChangeCor}
//             />
//             Azul
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="cor"
//               value="branco"
//               checked={cor.includes("branco")}
//               onChange={handleChangeCor}
//             />
//             Branco
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="cor"
//               value="preto"
//               checked={cor.includes("preto")}
//               onChange={handleChangeCor}
//             />
//             Preto
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="cor"
//               value="roxo"
//               checked={cor.includes("roxo")}
//               onChange={handleChangeCor}
//             />
//             Roxo
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="cor"
//               value="dourado"
//               checked={cor.includes("dourado")}
//               onChange={handleChangeCor}
//             />
//             Dourado
//           </label>
//         </S.Filtro>
//       </S.FiltroContainer>
//       <>
//         <S.Celulares>
//           {produtos.length >= 1 && produtos.map((product) => (
//             <CardProducts product={product} key={product.name} />
//           ))}
//           {produtos.length == 0 && <p>Produto não encontrado</p>}
//         </S.Celulares>
//       </>
//     </S.ContainerGlobal>
//     </>
//   );
// };

// export default IPhones;


import { Head } from "../../components/Head"
import { Telas } from "./Telas"

import * as S from "./styles"

const IPhones = () => {
  return (

    <S.Content>
      <Head title="iPhones" />

    



      <S.Container>
        <Telas />
      </S.Container>

    </S.Content>

  )
}

export default IPhones
