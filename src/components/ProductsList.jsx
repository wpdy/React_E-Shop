import Item from './Item';


const ProductsList = ({buyProduct}) => {

   
  return (
    <div>
      {/* <h1 className="text-center my-2 productslist">Products List</h1> */}
      <Item buyProduct={buyProduct}/>
    </div>
  )
}

export default ProductsList
