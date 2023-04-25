import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

export const ItemDetail = (producto) => {
    const [isCant, setIsCant] = useState(false)

    const onAdd = (cantidad) =>{
    console.log('cantidad seleccionada : ', cantidad)
    setIsCant(true)
    }
  return (
    <>
        <div className="row">
            <div className="col">
                <img src={producto.img} alt="imagen" />
                <h3>Nombre: {producto.name}</h3>
                <h3>Categoria: {producto.categoria}</h3>
                <h3>Precio: {producto.price}</h3> 
            </div>
            <div className="col">
            {
            !isCant ?
                <ItemCount onAdd={onAdd}/>
            :
                <>
                    <Link to={'/cart'} className="btn btn-outline-danger">Terminar Compra</Link>
                    <Link to={'/'} classNmae="btn btn-outline-succes">Seguir la Compra</Link>
                </>
        }
            </div>
        </div>
        
    </>
  )
}

export default ItemDetail