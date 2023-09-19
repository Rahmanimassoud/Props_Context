
const Cart = ({ products }) => {
  // filtered the products here in order to map through it in the return statment and display it.
  const filteredProducts = products.filter((product)=> product.inCart);
  return (
    <div>
        {/* we need products array here */}
        {/* {products.filter((product) => {
            if (product.inCart) {
                return true
            } else {
                return false
            }
        })} */}

        {filteredProducts.map((product, idx)=>{
          return (
            <div key={idx}>
              <h1>Product Name: {product.name}</h1>
              <h1>Product Price: {product.price}</h1>
            </div>
          )
        })}
    </div>
  )
}

export default Cart