import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query,where } from "firebase/firestore"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { category } = useParams()
    
    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'products')
        
        if (!category) {
            getDocs(queryCollection)
                .then(res => setProducts( res.docs.map(product => ( { id: product.id, ...product.data() } )) ))
                .catch(error => console.log(error))
                .finally(() => setIsLoading(false))
        }else{
            const queryCollectionFiltered = query(
                queryCollection,
                where('category', '==', category)
            )
            getDocs(queryCollectionFiltered)
            .then(res => setProducts( res.docs.map(product => ( { id: product.id, ...product.data() } )) ))
            .catch( error => console.log(error) )
            .finally(() => setIsLoading(false))
        }
    }, [category])

    return (
        isLoading ? 
                <h2>Cargando...</h2>
            :
            <ItemList products={products} />
        
        
    )
}
  
  export default ItemListContainer