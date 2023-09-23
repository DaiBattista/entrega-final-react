import React from 'react'
import style from './style.module.css'

export const CartWidget = () => {
    return (
        <>
        <i className="bi bi-cart3"></i>
        <div className={style['cart-count']}>
            <h4>0</h4>
            </div>
        </>
    );
}