import ProductsDisplay from "../../components/ProductsDisplay"

const Products = ({ products, setProducts }) => {
  return (
    <div>
        <h1>This is the Products Page!</h1>
        <ProductsDisplay products={products} setProducts={setProducts}/>
    </div>
  )
}

export default Products