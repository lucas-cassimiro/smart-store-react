import styled from "styled-components";


// export const ContainerFiltro = styled.div`
//    display: flex;

//   h1 {
//     margin-top: 32px;
//     margin-left: 84px;
//     font-size: 1rem;
//     font-weight: 400;

//     @media (max-width: 420px){
//       margin-left: 1.25rem;
//     }

//     @media (max-width: 320px){
//       margin-top: 1.25rem;
//       margin-left: 0.625rem;
//       font-size: 0.8125rem;
      
//     }
//   }
  
//   div {
//     width:  65%;
//     height: 60px;
//     border-bottom: 1px solid black;
//     margin-left: 150px;
//     margin-bottom: 28px;
//     margin-top: 80px;
  
    
//     label {
//       font-family: var(--font-text);
//       font-weight: 600;
//       font-size: 16px;
//       margin-right: 8px;
//     }
    
//     select  {
//       width: 220px;
//       height: 38px;
//       background: #FFFFFF;
//       border: 2px solid rgba(158, 158, 158, 0.87);
//       border-radius: 8px;
//       cursor: pointer;
//       margin-right: 24px;
//       font-size: 16px;
//       font-weight: 400;
//       color: #313131;
//       padding: 0 10px;
//     }
    
//     input {
//       width: 220px;
//       height: 40px;
//       background: #FFFFFF;
//       border: 2px solid rgba(158, 158, 158, 0.87);
//       border-radius: 8px;
//       padding: 0 10px;
      
//       ::placeholder,
//       ::-webkit-input-placeholder {
//         font-size: 16px;
//         font-weight: 400;
//         font-style: italic;
//         color: #989898;
//       }
//     }

//     @media (max-width: 1024px){
//       width: 56%;

//       select {
//         width: 114px;
//         height: 35px;
//       }
  
//       input {
//         width: 150px;
//         height: 35px;
        
         
//       ::placeholder,
//       ::-webkit-input-placeholder {
//         font-size: 12px;
//       }
//       }
//     }

//     @media (max-width: 768px){
//       width: 75%;
//       margin-left: -150px;
  
//     }

//     @media (max-width: 420px){
//       width: 10%;
//       border: none;
//       margin-left: 60px;
//       margin-top: 60px;
//       margin-bottom: 100px;
//     }

//     @media (max-width: 320px){
//       margin-left: 0px;

//       input {
//         width: 114px;
//       }
//     }

//   }
// }
  

// `

// export const ContainerGlobal = styled.section`
//   display: flex;
//   font-family: var(--font-text);
// `

// export const FiltroContainer = styled.section`
//   margin-left: 84px;
//   width: 200px;

//   div {
//     display: flex;

//     img {
//       height: 25px;
//       width: 25px;
//     }

//     h2 {
//       font-size: 20px;
//     }
//   }

//     @media (max-width: 420px){
//       margin-left: 20px;

//       div {
//         h2 {
//           font-size: 18px;
//         }
//       }
//     }

//     @media (max-width: 320px){
//       margin-left: 10px;


//       div {
//         h2 {
//           font-size: 1rem;
//         }
//       }
//     }

   




// `;

// export const CategoriasRelacionadas = styled.div`

//   display: flex;
//   flex-direction: column;

//   h2 {
//     margin-bottom: 24px;
//     font-size: 20px;
//     font-weight: 600;
//     width: 235px;
//   }

//   div {
//     display: flex;
//     flex-direction: column;
//     gap: 8px;
//   }

//   @media (max-width: 320px){
//     font-size: 14px;
//   }

// `

// export const Filtro = styled.div`
//   display: flex;
//   flex-direction: column;

//   h3 {
//     font-weight: 600;
//     font-size: 1.0625rem;
//     margin: 16px 0;
//   }

//   input {
//       margin: 8px;
//     }

//     @media (max-width: 320px){
//       h3 {
//         font-size: 0.9375rem;
//       }
      
//       font-size: 0.8125rem;
//     }
  



// `;

// export const Celulares = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin-left: 100px;
//   gap: 50px;

//   @media (max-width: 1367px){
//     gap: 10px;
//   }

//   @media (max-width: 420px){
//     margin-left: 10px;
//   }

//   @media (max-width: 320px){
//     margin-left: -50px;
//   }


// `

// export const FilterByPrice = styled.div`
//     margin-top: 37px;
//     display: flex;
//     align-items: center;
//     gap: 8px;
// `

export const Container = styled.div`
  @media (max-width: 768px){
    display: flex;
  align-items: center;
  justify-content: center;
 // margin-top: 50px;
  margin-bottom: 100px;
  position: relative;
  }
`;

export const Content = styled.section`
  h1 {
    padding-left: 1.5rem;
    padding-top: 1.5rem;
    font-size: 1rem;
    font-weight: 400;
  }
`;