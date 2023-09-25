import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/index'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/client'
import { Card, Col, Container, Row } from "react-bootstrap"
import style from './style.module.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { id } = useParams()

    const docRef = doc(db, 'items', id)

    getDoc(docRef)
        .then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)
        }, [id])

    if (product === null) {
        return (
            <div className={style["charge_container"]}>
                <h2>Cargando...</h2>
            </div>
        )
    }

    return (
        <ItemDetail detail={product} />
    )
}
export default ItemDetailContainer