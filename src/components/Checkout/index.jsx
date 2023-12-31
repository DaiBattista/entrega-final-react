import { Timestamp, collection, doc, documentId, getDocs, query, where, writeBatch, addDoc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/client'
import CheckoutForm from '../CheckoutForm/index'
import { useContext, useState } from 'react'
import { CartContext } from '../CartContext'
import style from './style.module.css'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, totalPrice, clearCart } = useContext(CartContext)

    const creatOrder = async ({ client, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    client, phone, email
                },
                items: cart,
                total: totalPrice(),
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'items')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Este producto no tiene stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (orderId) {
        return (
            <div className={style['checkout_container']}>
                <p>El id de su orden es: <b>{orderId}</b></p>
            </div>
        )
    }

    if (loading) {
        return (
            <div className={style['checkout_container']}>
                <h2>Cargando...</h2>
            </div>
        )
    }

    return (
        <div className={style['checkout_container']}>
            <h1>Completar orden</h1>
            <CheckoutForm onConfirm={creatOrder} />
        </div>
    )
}

export default Checkout