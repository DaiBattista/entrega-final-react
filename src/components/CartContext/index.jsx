import { useEffect, useState, useParams } from "react"
import { createContext } from "react"

export const CartContext = createContext();

export const CartComponentContext = ({children}) =>{
    const [productos, setProductos] = useState([])
    const [cart, setCart] = useState([])
    const [totalCarrito, setTotalCarrito] = useState(0)
    const [user, setUser] = useState([])

    const getProductById = (id) => cart.find(product => product.id === id) || null
    const addCart = (detail, quantity) => {
        const product = getProductById(detail.id)
        if(!product) {
            detail.quantity = quantity
            setCart([...cart, detail])
        } else {
            if(product.quantity + quantity > product.stock) return false
            product.quantity += quantity
        }
        setTotalCarrito(totalCarrito + quantity)
        return true;
    }

    const isInCart = (product) => getProductById(product.id) ? true : false
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }

    const totalProducts = () => cart.reduce ((acumulador, productoActual) => acumulador + productoActual.quantity, 0)

    const vaciarCarrito = () => {
        setCart([])
        setTotalCarrito(0)
    }

    const removerProducto = (id) => setCart(cart.filter(producto => producto.id !==id))

    useEffect ( () => {
        setProductos()
    })

    return <CartContext.Provider
    value={{productos, setProductos, cart, setCart, totalCarrito, setTotalCarrito, vaciarCarrito, user, setUser, totalPrice, totalProducts, removerProducto, addCart, isInCart}}> 
        {children}
    </ CartContext.Provider>
}