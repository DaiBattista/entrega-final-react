import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/index'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/client'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    const  docRef = doc(db, 'items', itemId)

    getDoc(docRef)
    .then(response => {
        const data = response.data()
        const productAdapted = { id: response.id, ...data}
        setProduct(productAdapted)
    }, [itemId])
}
export default ItemDetailContainer