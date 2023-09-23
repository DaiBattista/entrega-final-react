import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/index'

export default function ItemDetailContainer() {
    const [detail, setDetail] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch('/data/productos.json')
            const productos = await response.json()
    
            const productoFiltrado = productos.find(producto => producto.id === parseInt(id))
            setDetail(productoFiltrado)
        }

        getProduct()
}, [id])

return (
    <ItemDetail detail={detail} />
)
}