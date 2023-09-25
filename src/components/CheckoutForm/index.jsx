import { useState } from 'react'
import Checkout from '../Checkout'
import style from './style.module.css'

const CheckoutForm = ({ onConfirm, creatOrder }) => {
    const [client, setClient] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            client, phone, email
        }

        onConfirm(userData)
        creatOrder(userData)
    }

    return (
        <div>
            <form onSubmit={handleConfirm}></form>
            <label>
                Nombre
                <input 
                type="text" 
                value={client}
                onChange={({ target }) => setClient(target.value)}
                />
            </label>
            <label>
                Telefono
                <input 
                type="text" 
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
                />
            </label>
            <label>
                Email
                <input 
                type="email" 
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                />
            </label>
            <div>
                <button type='submit' onClick={() => creatOrder()}>Crear Orden</button>
            </div>
        </div>
    )
}

export default CheckoutForm