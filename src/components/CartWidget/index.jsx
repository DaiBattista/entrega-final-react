import React, { useContext } from 'react'
import style from './style.module.css'
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {
    const { totalProducts } = useContext(CartContext)
    return (
        <div>
            <Link to='/cart'>
                <i className="bi bi-cart4"></i>
                <div className={style['cart-count']}>
                    <h4>{totalProducts() || ''}</h4>
                </div>
            </Link>
        </div>

    )
}