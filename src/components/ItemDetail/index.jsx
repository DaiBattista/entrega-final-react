import style from './style.module.css'
import ItemCount from '../ItemCount/index.jsx'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'

const ItemDetail = ({ detail }) => {
    const {addCart} = useContext(CartContext)
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        addCart(detail, quantity)
    }

    return (
        <div className={style['container_detail']}>
            <div className={style['container_imagen']}>
                <img src={detail.img} alt='detalle' className={style['img_style']} />
            </div>
            <div className={style['container_info']}>
                <h1>{detail.name}</h1>
                <h2>${detail.price}</h2>
                <h3>{detail.description}</h3>

                <div className={style['counter_info']}>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className={style['btn_agregar']}> Terminar compra </Link>
                        ) : (
                            <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
                        )
                    }
                </div>

            </div>

        </div>
    )
}

export default ItemDetail