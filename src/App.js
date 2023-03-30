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

    const newCart = [...addToCart]

    let productInCart = newCart.find(
      (localVar) => product.id === localVar.id
    )

    console.log(newCart)

    if(productInCart === undefined) {
      productInCart = {
        ...product,
        quantinty: 1,
      }
      newCart.push(productInCart)
    }

    setAddToCart(newCart)


    // product.quantinty = 1
    // setAddToCart([...addToCart, product])

  }

  const removeProduct = (productID) => {
    const newList = addToCart.filter(product => product.id !== productID);
    setAddToCart(newList);
  }

  const increaseQuantity = (item) => {
    console.log('increaseQuantity')
    const newCart = [...addToCart]

    let productInCart = newCart.find(
      (localVar) => item.id === localVar.id
    )

    if (productInCart && productInCart.quantinty < item.countInStock) {
      productInCart.quantinty++
    }
    else {
      alert('Nepakkanka')
    }

    setAddToCart(newCart)
  }


  const decreaseQuantity = (item) => {
    console.log('decreaseQuantity')

    const newCart = [...addToCart]

    let productInCart = newCart.find(
      (localVar) => item.id === localVar.id
    )

    if (productInCart && productInCart.quantinty > 1) {
      productInCart.quantinty--
    }
    else {
      newCart.splice(productInCart, 1)
    }

    setAddToCart(newCart)
  }


  const clearCart = () => {
    setAddToCart([])
  }


  return (
    <Container>
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsList buyProduct={buyProduct}/>}/>
          <Route path='/cart' element={<Cart addToCart={addToCart} removeProduct={removeProduct} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} clearCart={clearCart}/>}/>
        </Routes>
      </BrowserRouter>
        
    </Container>
  )
}

export default App
