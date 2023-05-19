import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect } from "react"
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useState } from "react"

const ItemDetailContanier = () => {
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState({})

    const {pid} = useParams()
    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryDoc = doc(dbFirestore, 'products', pid)
        
        getDoc(queryDoc)
            .then(resp => setProduct( { id: resp.id, ...resp.data() } ) )
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
    }, [])

    console.log(pid)
    
    return (
        <div>
            {isLoading ?
            <h2>Cargando...</h2>
            :
            <ItemDetail product={product}  />
            }
        </div>
    )
}

export default ItemDetailContanier