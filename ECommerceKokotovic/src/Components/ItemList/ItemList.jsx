import { memo } from 'react'
import { Link } from 'react-router-dom'
import Item from '../Item/Item'
const ItemList = ({productos}) => {
  console.log('ItemList')
  return (
    <div style={{
        display: "flex",
        flexDirection: 'row',
        flexWrap: "wrap",
        padding: '20px'
    }}>
        {productos.map( producto => <Item key={producto.id} {...producto} />)}
    </div>
  )
}


export default ItemList