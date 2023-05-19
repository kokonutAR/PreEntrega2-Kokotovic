import Item from '../Item/Item'
const ItemList = ({products}) => {
  console.log('ItemList')
  return (
    <div style={{
        display: "flex",
        flexDirection: 'row',
        flexWrap: "wrap",
        padding: '20px'
    }}>
        {products.map( product => <Item key={product.id} {...product} />)}
    </div>
  )
}


export default ItemList