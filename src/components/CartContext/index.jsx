import { useEffect, useState, useParams } from "react";
import { createContext } from "react"

const estado = [
    {
        "id": 1,
        "name": "Super Mario Bros.™ Wonder",
        "price": 61539,
        "img": "../img/mario_1.png",
        "category": "nuevo",
        "description": "Encuentra maravillas en la siguiente evolución de las aventuras de Mario"
    },
    {
        "id": 2,
        "name": "Super Mario™ 3D World + Bowsers Fury",
        "price": 61539,
        "img": "../img/mario_2.png",
        "category": "nuevo",
        "description": "¡Activa mejoras, trabaja en equipo y salva el Reino de las hadas!"

    },
    {
        "id": 3,
        "name": "Mario Kart™ 8 Deluxe",
        "price": 34809,
        "img": "../img/mario_3.png",
        "category": "clasico",
        "description": "¡Corre con Mario y sus amigos donde quieras y cuando quieras!"
    },
    {
        "id": 4,
        "name": "Mario + Rabbids spark of hope",
        "price": 36999,
        "img": "../img/mario_4.png",
        "category": "clasico",
        "description": "Explora planetas a través de la galaxia. Descubres misteriosos secretos y disfrutas de atractivas misiones!"
    },
    {
        "id": 5,
        "name": "WarioWare™: Get It Together!",
        "price": 39689,
        "img": "../img/mario_6.png",
        "category": "clasico",
        "description": "Enfréntate a más de 200 veloces y extravagantes microjuegos, ¡solo o con tus amigos!"
    },
    {
        "id": 6,
        "name": "Captain Toad™: Treasure Tracker",
        "price": 37689,
        "img": "../img/mario_5.png",
        "category": "clasico",
        "description": "¡El capitán Toad es la estrella de su propia aventura de rompecabezas en la consola Nintendo Switch!"
    },
    {
        "id": 7,
        "name": "Super Mario Party",
        "price": 61539,
        "img": "../img/mario_7.png",
        "category": "lanzamiento",
        "description": "Diversión supercargada con tus amigos y familiares, ¡ahora lo podrás disfrutar en línea!"
    },
    {
        "id": 8,
        "name": "Paper Mario™: The Origami King",
        "price": 61539,
        "img": "../img/mario_8.png",
        "category": "lanzamiento",
        "description": "¡Una aventura de Mario de papel se desenvuelve en la consola Nintendo Switch!"
    },
    {
        "id": 9,
        "name": "Nintendo Switch",
        "price": 375654,
        "img": "../img/mario_9.png",
        "category": "lanzamiento",
        "description": "Totalmente equipada para jugar en casa o en el camino. Pantalla OLED de colores vibrantes."
    }
]

export const CartContext = createContext();

export const CartComponentContext = ({children}) =>{
    const [productos, setProductos] = useState([])
    const [cart, setCart] = useState([])
    const [totalCarrito, setTotalCarrito] = useState([])
    const [user, setUser] = useState([])

    const vaciarCarrito = () => {
        setCart([])
        setTotalCarrito(0)
    }

    useEffect ( () => {
        setProductos(estado)
    })
    
    return <CartContext.Provider value={{productos, setProductos, cart, setCart, totalCarrito, setTotalCarrito, vaciarCarrito, user, setUser}}>
        {children}
    </ CartContext.Provider>
}