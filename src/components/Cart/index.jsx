import style from './style.module.css'
import { useContext } from "react"
import { CartContext } from '../CartContext'
import CartItem from '../CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, totalPrice } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className={['cart_container']}>
                <h3>No hay productos en el carrito</h3>
                <Link to='/' className={style['btn_productos']}>Ver productos</Link>
            </div>
        )
    }

    return (
        <div>
            {
                cart.map(producto => <CartItem key={producto.id} producto={producto} />)
            }
            <p>
                Total: {totalPrice()}
            </p>
        </div>
    )
}

export default Cart