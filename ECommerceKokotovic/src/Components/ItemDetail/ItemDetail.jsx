import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

function ItemDetail ({ producto }) {
    const [isCant, setIsCant] = useState(false)

    const {addToCart} = useCartContext()

    const onAdd = (cantidad) => {
        console.log('cantidad seleccionada : ', cantidad)
        addToCart({...producto, cantidad})
        setIsCant(true)
    }
    console.log(producto)
    return (
        <>
            <div className="row text-center p-5">
                <div className="col">
                    <img src={producto.img} alt="imagen" />
                    <h3>Nombre: {producto.name}</h3>
                    <h3>Categoria: {producto.categoria}</h3>
                    <h3>Precio: {producto.price}</h3>
                    <h3>Descripcion: {producto.descripcion}</h3>
                </div>
                <div className="col">
                    {!isCant ?
                        <ItemCount onAdd={onAdd} />
                        :
                        <>
                            <Link to='/cart' className="btn btn-outline-succes">Terminar Compra</Link>
                            <Link to='/' className="btn btn-outline-succes">Seguir la Compra</Link>
                        </>}
                </div>
            </div>

        </>
    )
}

export default ItemDetail