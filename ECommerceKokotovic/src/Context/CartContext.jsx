import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const addToCart = (newProduct) =>  {
        
        const idx = cartList.findIndex( prod => newProduct.id === prod.id )
        
        if (idx === -1){
            setCartList([
                ...cartList,
                newProduct
            ])
        } else {
            cartList[idx].cantidad += cartList[idx].cantidad = newProduct.cantidad
            setCartList([ ...cartList ])
        }
    }
    const totalPrice = () => cartList.reduce((total, objProduct) => total += (objProduct.cantidad * objProduct.price), 0) 

    const cantidadTotal = () => cartList.reduce((total, objProd) => total += objProd.cantidad, 0)

    const eliminarProduct = (pid) => {
        setCartList(cartList.filter(prod => prod.id !== pid))
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList, 
            addToCart,
            totalPrice,
            cantidadTotal,
            eliminarProduct,
            vaciarCarrito, 
            
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext