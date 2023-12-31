import style from './style.module.css'
import { useContext } from "react"
import { CartContext } from '../CartContext'
import CartItem from '../CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, totalPrice, vaciarCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className={style['cart_container']}>
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
            <div className={style['checkout_container']}>
                <p>
                    Total: <b>${totalPrice()}</b>
                </p>
            </div>
            <div className={style['checkout_container_btn']}>
                <Link to= '/checkout' className={style['btn_pagar']}>Ir a pagar</Link>
                <button onClick={() => vaciarCarrito()} className={style['btn_clear']}>Limpiar carrito</button>
            </div>
        </div>
    )
}

export default Cart