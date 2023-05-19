import { useCartContext } from "../../Context/CartContext"

export const CartWidget = () => {
  const {cantidadTotal} = useCartContext()
    return (
      <div>
        {cantidadTotal()}🛒
      </div>
    )
  }
  
  export default CartWidget