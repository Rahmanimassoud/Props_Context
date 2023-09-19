
const ProductsDisplay = ({ products, setProducts }) => {

    const handleProductClick = (id) => {
        // we have the id of the clicked property
        
        // 1. make a new products array (from the old state)
        // 2. set inCart = true for the clicked product
        // 3. set state to this new products array
        const updatedProduct = [...products];
        const clickedProduct = updatedProduct.find((product)=> product.id === id)
        if(clickedProduct){
          clickedProduct.inCart = true;
          setProducts(updatedProduct);
        }
    }

  return (
    <div>
        {/* we need the products array here */}
        {products.map((product, idx) => {
            return <div key={idx} onClick={() => handleProductClick(product.id)}>{product.name}</div>
        })}
    </div>
  )
}

export default ProductsDisplay