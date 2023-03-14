import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'

const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>

    <Routes>
    <Route exact path= '/' element= {<ItemListContainer/>}/>
    <Route exact path= '/itemdetailcontainer' element= {<ItemDetailContainer/>}/>
    {/* <Route exact path= '/cart' element= {<Cart/>}/> */}
    
    
    </Routes>

    </BrowserRouter>
  )
}

export default App
