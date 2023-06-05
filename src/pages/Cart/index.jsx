import ProductInCart from "../../components/productInCart"
import { useCartContext } from "../../context/CartContext"
import { Head } from "../../components/Head/index.jsx";
import * as S from "./styles"


const Cart = () => {
    const { productsInCart } = useCartContext()

    return(
        <>
            <Head title='Carrinho'/>
            <h3>Você está em: carrinhos</h3>

            <>
                {productsInCart.length >= 1 && productsInCart.map(item => (
                     <ProductInCart product={item}/>
                ))}
                {productsInCart.length == 0 && 
                        <div>
                                <p>O seu carrinho ainda se encontra vazio!</p>

                        </div>}
            </>
        </>
    )
}

export default Cart