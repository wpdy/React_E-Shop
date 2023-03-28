import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';
import Header from './components/Header';
import ProductsList from './components/ProductsList';

import Container from 'react-bootstrap/Container';

import { useState } from 'react';

const App = () => {

  const [addToCart, setAddToCart] = useState([])

  const buyProduct = (product) => {
    const temVar = [...addToCart, product]
    setAddToCart(temVar)
  }

  const removeProduct = (productID) => {
    const newList = addToCart.filter(product => product.id !== productID);
    setAddToCart(newList);
  }

  return (
    <Container>
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsList buyProduct={buyProduct}/>}/>
          <Route path='/cart' element={<Cart addToCart={addToCart} removeProduct={removeProduct}/>}/>
        </Routes>
      </BrowserRouter>
        
    </Container>
  )
}

export default App






// const newU = addToCart.filter((lol) => {
//   if (product === lol) {
//     console.log('Jau yra')
//   }
// });


