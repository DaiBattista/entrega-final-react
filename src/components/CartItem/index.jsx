import React from "react";
import { CartContext } from '../CartContext'
import { useContext } from "react";

const CartItem = ({ producto }) => {
const { removerProducto } = useContext(CartContext)

    return (
        <div>
            <p>Nombre: {producto.name}</p>
            <p>Cantidad: {producto.quantity}</p>
            <p>Precio: ${producto.price}</p>
            <p>Subtotal: ${producto.quantity * producto.price}</p>
            <button onClick={() => removerProducto(producto.id)}>X</button>
        </div>
    )
}

export default CartItem