import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//duomenys
import products from '../data/data';

const Item = () => {
  console.log(products)
  return (
    <div className="row d-flex justify-content-evenly">
      {products.map(product =>( 
      <Card style={{ width: '18rem', height: '410px', marginBottom: '0.5rem' }} key={product.id}>
          <Card.Img variant="top" src={product.imageUrl} style={{height: '150px', objectFit: 'cover'}} />
          <Card.Body>
            <Card.Title style={{height: '30px', overflow: 'hidden'}}>{product.name}</Card.Title>
            <Card.Text style={{height: '140px', overflow: 'hidden', textShadow: 'none', color: 'black'}}>{product.description}</Card.Text>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>))
      }
    </div>
  )
}

export default Item
