import '../App.css'
import ItemListContainer from '../components/ItemListContainer'
import NavBar from '../components/NavBar'
import ItemDetailContainer from '../components/ItemDetailContainer'
import { CartComponentContext } from '../components/CartContext'
import Cart from '../components/Cart'

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from 'react-router-dom'

export default function Router() {
    return (
        <CartComponentContext>
        <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
                </BrowserRouter>
        </CartComponentContext>
    )
}