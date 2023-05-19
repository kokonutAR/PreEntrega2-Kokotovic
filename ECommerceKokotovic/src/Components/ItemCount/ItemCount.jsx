import HookContador from '../../Hook/HookContador'

const ItemCount = ({initial = 1, stock = 10, onAdd}) => {
    
    const {contador, sumar, restar} = HookContador(initial, 1, stock)

return(
    <center>
        <p>{contador}</p>
        <button onClick={restar} className="m-1 btn btn-outline-danger"> - </button>
        <button onClick={sumar} className="m-1 btn btn-outline-success"> + </button>
        <button onClick={()=>{onAdd(contador)}} className='btn btn-outline-primary'>Agregar al Carrito</button>
    </center>
)

}

export default ItemCount