import products from '../data/data';

const Item = ({buyProduct}) => {

  return (
    <div className='movies_list'>
      {
        products.map((product) => (
          <div key={product.id} className='one_movie'>
            <img src={product.imageUrl} alt="" />
            <p className='productname'>{product.name}</p>
            <p>{product.description}</p>
            <h1 className='lolas'>Stock: {product.countInStock}</h1>
            <p className='productprice'>{product.price}$</p>
            <button className='itemButton' onClick={() => buyProduct(product)} >Buy</button>
          </div>
        ))
      }
    </div>
  )
}

export default Item
