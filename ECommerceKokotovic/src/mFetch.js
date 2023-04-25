const productos = [
    {id: '1', name: 'Margherita', price: 1500, img: '/public/Margherita.jpg', categoria: 'Original'},
    {id: '2', name: 'Bianca Verde', price: 1500, img: '/public/BiancaVerde.jpg', categoria: 'Original'},
    {id: '3', name: 'Queen Margherita', price: 1800, img: '/public/QueenMargherita.jpg', categoria: 'Italiana'},
    {id: '4', name: 'Rosa Bianca', price: 1600, img: '/public/RosaBianca.jpg', categoria: 'Italiana'},
    {id: '5', name: 'Cuatro Quesos', price: 1600, img: '/public/4Quesos.jpg', categoria: 'Original'},
    {id: '6', name: 'Rucula', price: 1500, img: '/public/Rucula.jpg', categoria: 'Italiana'},
    {id: '7', name: 'Salchicha', price: 1800, img: '/public/Salchicha.jpg', categoria: 'Sabor del Mes'},
    {id: '8', name: 'Hongos', price: 1800, img: '/public/Hongos.jpg', categoria: 'Sabor del Mes'},    
]

export const mFetch = (id) => {
    return new Promise((res, rej) => {

        setTimeout(() => {
            res(!id ? productos : productos.find(producto => producto.id === id))
        }, 1000)
    }) 
}
