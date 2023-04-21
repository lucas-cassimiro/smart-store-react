import React from 'react'
import * as S from './styles'

const ProductInCart = ({ product }) => {

console.log(product);

  return (
    
        <S.RecipientProduct>
            <p>{product.name}</p>
        </S.RecipientProduct>
    
  )
}

export default ProductInCart