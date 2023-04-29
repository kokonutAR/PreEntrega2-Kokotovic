import HookContador from '../Hook/HookContador'

const ItemCount = ({initial = 1, stock = 10}) => {
    
    const {contador, sumar, restar} = HookContador(initial, 1, stock)

return(
    <div>
        <p> {contador}</p>
        <button onClick={restar} className="m-1"> - </button>
        <button onClick={sumar} className="m-1"> + </button>
        <button className="m-1">Agregar al Carrito</button>
    </div>
)

}

export default ItemCount;