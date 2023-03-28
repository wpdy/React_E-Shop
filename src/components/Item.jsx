import products from '../data/data';

const Item = ({buyProduct}) => {

  const handleClick = (product) => {
    buyProduct(product)
  }

  return (
    <div className='movies_list'>
      {
        products.map((product) => (
          <div key={product.id} className='one_movie'>
            <img src={product.imageUrl} alt="" />
            <p className='productname'>{product.name}</p>
            
            <p>{product.description}</p>
            <p className='productprice'>{product.price}$</p>
            <button className='itemButton' onClick={() => handleClick(product)} >Buy</button>
          </div>
        ))
      }
    </div>
  )
}

export default Item
