import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsList/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
