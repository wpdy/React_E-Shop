
import Table from 'react-bootstrap/Table';


const Cart = ({addToCart, removeProduct, increaseQuantity, decreaseQuantity, clearCart}) => {

  // console.log(addToCart)

  const TotalPrice = () => {
    return addToCart.reduce((sum, {price, quantinty}) => 
    sum + price*quantinty, 0).toFixed(2)
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
        
      </thead>
      <tbody>
        {
          addToCart?.map((product, index)=>(
              <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>
                    <button onClick={() => decreaseQuantity(product)}>-</button>
                    {product.quantinty}
                    <button onClick={() => increaseQuantity(product)}>+</button>
                  </td>
                  <td>{product.price}</td>
                  <td><button onClick={() => removeProduct(product.id)}>Remove</button></td>
              </tr>
          ))
        }
        
        {
          <tr>
            <td colSpan={3}>Bendra suma: { TotalPrice() }</td>
            <td><button onClick={() => clearCart()}>Pay</button></td>
            <td><button>Reset</button></td>
          </tr>
        }
        
      </tbody>
    </Table>
  )
}

export default Cart
