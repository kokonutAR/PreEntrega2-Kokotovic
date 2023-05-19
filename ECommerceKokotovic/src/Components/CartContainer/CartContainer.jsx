import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../Context/CartContext"
import { useState } from 'react'
import { Link } from "react-router-dom"

const CartContainer = () => {
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const {cartList, vaciarCarrito, totalPrice, eliminarProduct} = useCartContext()   

    const generarOrden = (evt) => {
        evt.preventDefault()

        const order  = {}
        order.buyer = dataForm
        order.items = cartList.map(( {name, id, price, cantidad} ) => ( {id, name, price, cantidad} ))
        order.total = totalPrice()

        const dbFirestore = getFirestore()
        const ordersCollection = collection(dbFirestore, 'orders')

        addDoc(ordersCollection, order)
        .then(resp => console.log(resp))
    }

    const handleOnChange = (evt) =>{
        console.log('nombre del input', evt.target.name)
        console.log('valor del input', evt.target.value)
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
    }
    
    console.log(dataForm)

    return(
        <div>
            {cartList.length !== 0 ? 
                <>
                    {cartList.map(prod => (
                        <div className="w-50">
                            <img className="w-25" src={prod.img} alt="imagen"/>
                            <label> Precio {prod.price} - Cantidad: {prod.cantidad} </label>
                            <button onClick={()=> eliminarProduct(prod.id)} className="btn btn-outline-danger"> X </button>
                        </div>
                    ))}
                
                    <h4>Precio Total de la compra: {totalPrice()} $</h4>

                    <button onClick={vaciarCarrito} className="btn btn-outline-danger"> Vaciar Carrito</button>

                    <form>
                        <input
                            type="text"
                            name="name"
                            onChange={handleOnChange}
                            value={dataForm.name}
                            placeholder="Ingrese el Nombre"
                        />
                        <input 
                            type="text"
                            name="phone"
                            onChange={handleOnChange}
                            value={dataForm.phone}
                            placeholder="Ingrese el Telefono"
                        />
                        <input 
                            type="text"
                            name="email"
                            onChange={handleOnChange}
                            value={dataForm.email}
                            placeholder="Ingrese el E-mail"
                        />
                        <button className="btn btn-outline-success">Generar Orden</button>
                    </form>
                </>
            :
            <div>
                <h3>Carrito Vacio</h3>
                <Link to='/' className="btn btn-outline-primary">Ver Menu</Link>
            </div>

            }
        </div>
    )
}

export default CartContainer