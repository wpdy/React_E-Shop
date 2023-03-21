import Carousel from 'react-bootstrap/Carousel';
import products from '../data/data';

const Home = () => {
  return (
    <Carousel>
      {products.map(product => (
        <Carousel.Item key={product.id}>
          <img
            className="d-block w-100 carousel_img"
            src={product.imageUrl}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Home
