import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (newProduct) =>  {
        localStorage.setItem('cartList', cartList)
        setCartList([
            ...cartList,
            newProduct
        ])
    }
    const vaciarCarrito = () => {
        setCartList([])
    }
    return (
        <CartContext.Provider value={{
            cartList, addToCart, vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext