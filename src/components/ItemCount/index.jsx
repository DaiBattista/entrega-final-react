import { useState } from 'react'
import style from './style.module.css'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div>
            <div className={style['count_items']}>
                <button className={style['btn_increment']} onClick={increment}> + </button>
                <h5>{quantity} </h5>
                <button className={style['btn_decrement']} onClick={decrement}> - </button>
            </div>

            <div className={style['count_btn']}>
                <button className={style['btn_agregar']} onClick={() => onAdd(quantity)} disable={!stock}> Agregar al carrito </button>

                <button className={style['btn_reset']} onClick={() => setQuantity(0)}> Reset </button>
            </div>

        </div>

    )

}

export default ItemCount