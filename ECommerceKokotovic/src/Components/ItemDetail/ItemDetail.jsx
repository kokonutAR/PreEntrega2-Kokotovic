import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail ({ product }) {
    const [isCant, setIsCant] = useState(false)

    const {addToCart} = useCartContext()

    const onAdd = (cantidad) => {
        console.log('cantidad seleccionada : ', cantidad)
        addToCart({...product, cantidad})
        setIsCant(true)
    }
    
    return (
        <>
            <div className="row text-center p-5">
                <div className="col">
                    <img src={product.img} alt="imagen" />
                    <h3>Nombre: {product.name}</h3>
                    <h3>Categoria: {product.category}</h3>
                    <h3>Precio: {product.price}</h3>
                    <h3>Descripcion: {product.description}</h3>
                </div>
                <div className="col">
                    {!isCant ?
                        <ItemCount onAdd={onAdd} />
                        :
                        <>
                            <Link to='/cart' className="btn btn-outline-danger">Terminar Compra</Link>
                            <Link to='/' className="btn btn-outline-primary">Seguir la Compra</Link>
                        </>}
                </div>
            </div>

        </>
    )
}

export default ItemDetail