import Item from '../Item/Item'
const ItemList = ({products}) => {
  console.log('ItemList')
  return (
    <div className='row text-center offset-2'>
        {products.map( product => <Item key={product.id} {...product} />)}
    </div>
  )
}


export default ItemList