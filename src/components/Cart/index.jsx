import style from './style.module.css'
import { useContext } from "react"
import { CartContext } from '../CartContext'
import CartItem from '../CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className={['cart_container']}>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className={style['btn_productos']}>Productos</Link>
            </div>
        )
    }

    return (
        <div className={['cart_container_btn']}>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className={style['btn_clear']}>Limpiar carrito</button>
            <Link to='/checkout' className={style['btn_checkout']}>Checkout</Link>
        </div>
    )
}

export default Cart