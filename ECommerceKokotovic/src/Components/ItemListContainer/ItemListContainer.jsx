import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { mFetch } from "../../mFetch"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { category } = useParams()
    
    useEffect(() => {
        if (!category) {
            mFetch()
            .then((resultado) => {
                setProductos(resultado)
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
        }else{
            mFetch()
            .then((resultado) => {
                setProductos(resultado.filter(producto => producto.category === category))
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
        }
    }, [category])

    return (
        isLoading ? 
                <h2>Cargando...</h2>
            :
            <ItemList productos={productos} />
        
        
    )
}
  
  export default ItemListContainer