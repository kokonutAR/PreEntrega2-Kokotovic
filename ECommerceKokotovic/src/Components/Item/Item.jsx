import { Link } from "react-router-dom"

const Item = (product) => {
    const {id, img, name, price, category} = product
    return (
    <div className="card w-25 m-2">
            <Link to={`/detail/${id}`}>
                <img src={img} className="card-img-top" alt="imagen-card" />
            </Link>
        <div className="card-body text-center">
            <h6>Nombre: {name}</h6>
            <ul>Precio: {price}$</ul>
            <ul>Categoria: {category}</ul>
        </div>
        <div className="card-footer">
            <Link to = {`/detail/${id}`} >
                <button className="btn btn-outline-dark">Detalle</button>
            </Link>
        </div>
    </div> )
}

export default Item