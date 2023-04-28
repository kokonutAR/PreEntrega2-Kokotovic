import { useContador } from "../Hook/HookContador"

const ItemCount = ({initial = 1, stock = 10, onAdd}) => {
    
    const {contador, sumar, restar} = useContador(initial, 1, stock)

return(
    <div>
        <p> {contador}</p>
        <button onClick={sumar}> + </button>
        <button onClick={restar}> - </button>
        <button>Agregar al Carrito</button>
    </div>
)

}

export default ItemCount;