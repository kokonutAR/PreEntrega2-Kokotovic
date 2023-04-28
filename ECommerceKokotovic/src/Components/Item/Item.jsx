import { Link } from "react-router-dom"

const Item = (producto) => {
    const {id, img, name, price, categoria} = producto
    return (
    <div className="card w-25">
            <Link to={`/detail/${id}`}>
                <img src={img} className="card-img-top" alt="imagen-card" />
            </Link>
        <div className="card-body">
            <h6>Nombre: {name}</h6>
            <label>Precio: {price}</label>
            <label>Categoria: {categoria}</label>
        </div>
        <div className="card-footer">
            <Link to = {`/detail/${id}`} >
                <button className="btn btn-outline-dark">Detalle</button>
            </Link>
        </div>
    </div> )
}

export default Item