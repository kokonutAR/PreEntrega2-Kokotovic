const productos = [
    {id: '1' , name: 'Margherita', price: 1500, img: '/public/Margherita.jpg', categoria: 'Original', descripcion: 'Salsa de Tomate, Kesong puti, Parmesano, Albahaca'},
    {id: '2' , name: 'Bianca Verde', price: 1500, img: '/public/BiancaVerde.jpg', categoria: 'Original', descripcion:'Aceite de Oliva, Ajo, Kesong puti, Ricotta, Parmesano, Albahaca, Rucula'},
    {id: '3' , name: 'Queen Margherita', price: 1800, img: '/public/QueenMargherita.jpg', categoria: 'Italiana', descripcion:'Salsa de Tomate, Kesong puti, Tomates Cherry, Parmesano, Albahaca'},
    {id: '4' , name: 'Rosa Bianca', price: 1600, img: '/public/RosaBianca.jpg', categoria: 'Italiana', descripcion:'Aceite de Oliva, Ajo, Kesong puti, Tomates Cherry, Parmesano, Albahaca'},
    {id: '5' , name: 'Cuatro Quesos', price: 1600, img: '/public/4Quesos.jpg', categoria: 'Original', descripcion:'Salsa de Tomate, Mozzarella, Ricotta, Roquefort, Parmesano'},
    {id: '6' , name: 'Rucula', price: 1500, img: '/public/Rucula.jpg', categoria: 'Italiana', descripcion:'Salsa de Tomate, Kesong puti, Crema, Rucula'},
    {id: '7' , name: 'Salchicha', price: 1800, img: '/public/Salchicha.jpg', categoria: 'Sabor del Mes', descripcion:'Salsa de Tomate, Kesong puti, Salchicha Alemana, Cebolla, Albahaca'},
    {id: '8' , name: 'Hongos', price: 1800, img: '/public/Hongos.jpg', categoria: 'Sabor del Mes', descripcion:'Crema, Muzzarella, Ajo, Hongos, Roquefort'},    
]

export const mFetch = (id) => {
    return new Promise((res) => {

        setTimeout(() => {
            res(!id ? productos : productos.find(producto => producto.id === id))
        }, 1000)
    }) 
}
