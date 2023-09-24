import React, { useContext } from 'react'
import style from './style.module.css'
import cart from '../assests/cart.png'
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to='/cart' className={['']} style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <img className={['CartImg']} src={cart} alt='cart-widget' />
            {totalQuantity}
        </Link>
    );
}
