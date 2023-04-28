import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect } from "react"
import { mFetch } from "../../mFetch"
import { useState } from "react"

const ItemDetailContanier = () => {
    const [producto, setProducto] = useState({})
    const [isLoading, setIsLoading] = useState({})

    const {pid} = useParams()

    useEffect(() => {
        mFetch(pid)
        .then(respuesta => setProducto(respuesta))
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
    }, [])

    console.log(pid)
    return (
        <div>
            {isLoading ?
            <h2>Cargando...</h2>
            :
            <ItemDetail producto={producto}  />
            }
        </div>
    )
}

export default ItemDetailContanier