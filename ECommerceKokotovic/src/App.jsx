import { Route, Navigate, BrowserRouter as Router, Routes} from 'react-router-dom'

import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
 
  return (
    <div>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoria' element={<ItemListContainer />} />
        <Route path='/detail/:pid' element={<ItemDetailContainer />} />
        <Route path='*' element={ <Navigate to='/' /> } />      
      </Routes>
  </Router>
  </div>
)}

export default App