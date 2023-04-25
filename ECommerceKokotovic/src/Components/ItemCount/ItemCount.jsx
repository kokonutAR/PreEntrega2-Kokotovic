import { useContador } from "../Hook/HookContador"

const ItemCount = ({stock, initial, onAdd}) => {
    
    const {contador, incrementar, disminuir} = useContador(initial, stock)

return(
    <div className="Counter">
        <div className="Controls">
            <button className="Button" onClick={disminuir}>-</button>
            <h4 className="Number">{contador}</h4>
            <button className="Button" onClick={incrementar}>+</button>
        </div>
        <div>
            <button className="Button" onClick={()=> onAdd(contador)} disabled={!stock}>
                Agregar al carrito
            </button>
        </div>
    </div>
)

}

export default ItemCount;