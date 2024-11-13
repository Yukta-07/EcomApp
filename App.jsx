
import './App.css'
// import Product from './Customer/Components/Products/Product'
import Navigation from './Customer/Components/Navigation/Navigation'

import Home from './Customer/pages/HomePages/Home'
import {BrowserRouter, Routes , Route} from "react-router-dom"

function App() {
  return (
    
    <BrowserRouter>
    <Navigation/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    {/* <Route path="/product" element={<Product/>}/> */}
    </Routes>

    </BrowserRouter>

     
    
  )
}
export default App
