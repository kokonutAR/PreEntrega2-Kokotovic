import { Route, Navigate, BrowserRouter as Router, Routes} from 'react-router-dom'

import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './Components/CartContainer/CartContainer'

import 'bootstrap/dist/css/bootstrap.min.css'
import { CartContextProvider } from './Context/CartContext'


function App() {
 
  return (
    <CartContextProvider>
      <div>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoria' element={<ItemListContainer />} />
            <Route path='/detail/:pid' element={<ItemDetailContainer />} />
            <Route path='/cart' element={ <CartContainer /> } />      
            <Route path='*' element={ <Navigate to='/' /> } />
          </Routes>
        </Router>
      </div>
    </CartContextProvider>
)}

export default App