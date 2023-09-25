import { useContext, useState } from 'react'
import { Checkout } from '../Checkout/index'
import style from './style.module.css'

const CheckoutForm = ({ onConfirm }) => {
    const [client, setClient] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            client, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className={style['checkout_container']}>
            <form onSubmit={handleConfirm}>
                <label>
                    Nombre
                    <input
                        required
                        type="text"
                        value={client}
                        onChange={({ target }) => setClient(target.value)}
                    />
                </label>
                <label>
                    Telefono
                    <input
                        required
                        type="text"
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label>
                    Email
                    <input
                        required
                        type="email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <div>
                    <button type='submit' className={style['btn_orden']}>Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm