import React from 'react'
import { CartContext } from '../CartContext'
import { useContext, useState } from 'react'
import style from './style.module.css'
import { ItemListContainer } from '../ItemListContainer'

class CartItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
        }
    }

    render() {
        const { producto } = this.props

        return (
            <div className={style['cartItem_container']}>
                <div className={style['items_cart_img']}>
                    <img src={producto.img} alt='no hay imagen' className={style['img_cart']}></img>
                </div>
                <div className={style['items_cart_pago']}>
                    <h1>{producto.name}</h1>
                    <p>Cantidad: {producto.quantity}</p>
                    <p>Precio: ${producto.price}</p>
                    <p>Subtotal: ${producto.quantity * producto.price}</p>
                    <button onClick={() => this.removerProducto(producto.id)} className={style['btn_clear']}>Eliminar producto</button>
                </div>
            </div>
        )
    }

    removerProducto(id) {
        const products = this.state.products.filter(producto => producto.id !== id)

        this.setState({
            products,
        })
    }
}

export default CartItem