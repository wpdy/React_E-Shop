
import Table from 'react-bootstrap/Table';


const Cart = ({addToCart, removeProduct}) => {

  // console.log(addToCart.name)

  const handleRemove = (id) => {
    removeProduct(id)
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
              <tr key={index} className='test'>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td className='cartButton'><button>-</button><h1>Empty</h1><button>+</button></td>
                  <td>{product.price}</td>
                  <td><button onClick={() => handleRemove(product.id)}>Remove</button></td>
              </tr>
          ))
        }
      </tbody>
    </Table>
  )
}

export default Cart
