import HookContador from '../../Hook/HookContador'

const ItemCount = ({initial = 1, stock = 10, onAdd}) => {
    
    const {contador, sumar, restar} = HookContador(initial, 1, stock)

return(
    <center>
        <p>{contador}</p>
        <button onClick={restar} className="m-1"> - </button>
        <button onClick={sumar} className="m-1"> + </button>
        <button onClick={()=>{onAdd(contador)}}>Agregar al Carrito</button>
    </center>
)

}

export default ItemCount