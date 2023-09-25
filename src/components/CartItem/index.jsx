import React from 'react'
import { CartContext } from '../CartContext'
import { useContext, useState } from 'react'
import style from './style.module.css'
import { ItemListContainer } from '../ItemListContainer'

const CartItem = ({ producto }) => {
    const { cart, setCart } = useContext(CartContext)

    const handleRemoveProduct = (id) => {
        const updatedCart = cart.filter(producto => producto.id !== id)

        setCart(updatedCart)
    }

    return (
        <div className={style['cartItem_container']}>
            <div className={style['items_cart_img']}>
                <img src={producto.image} alt='no hay imagen' className={style['img_cart']}></img>
            </div>
            <div className={style['items_cart_pago']}>
                <h1>{producto.name}</h1>
                <p>Cantidad: {producto.quantity}</p>
                <p>Precio: ${producto.price}</p>
                <p>Subtotal: ${producto.quantity * producto.price}</p>
                <button onClick={() => handleRemoveProduct(producto.id)} className={style['btn_clear']}>Eliminar producto</button>
            </div>
        </div>
    )
}

export default CartItem