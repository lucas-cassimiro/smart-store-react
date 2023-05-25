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
                {
                    productsInCart.map(item => (
                        <ProductInCart product={item}/>
                    ))
                }
            </>
        </>
    )
}

export default Cart