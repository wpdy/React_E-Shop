// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

//duomenys
import products from '../data/data';

const Item = () => {
  console.log(products)
  return (
    <div className='movies_list'>
      {
        products.map((product) => (
          // console.log(product.Title)
          <div key={product.id} className='one_movie'>
            <img src={product.imageUrl} alt="" />
            <p className='productname'>{product.name}</p>
            
            <p>{product.description}</p>
            <p className='productprice'>{product.price}$</p>
            <button>Buy</button>
          </div>
        ))
      }
    </div>
  )
}

export default Item

// Img
// name
// description
// price
// <Button variant="primary">Buy</Button>



