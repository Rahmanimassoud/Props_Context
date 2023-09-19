
import { Route, Routes } from "react-router-dom";
import "./styles.css";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {

  const [products, setProducts] = useState([ 
  { name: 'Laptop', price: 1000, inCart: true }, 
  { name: 'Smartphone', price: 500, inCart: false },
  { name: 'Headphones', price: 100, inCart: false },
  { name: 'Keyboard', price: 50, inCart: false }, 
  { name: 'Mouse', price: 30, inCart: true } ]);

  return (
    <div>
      <h1>My Props App</h1>
      <Navbar products={products} />
      <Routes>
        <Route path="/" element={<Products products={products} setProducts={setProducts}/>} />
        <Route path="/cart" element={<Cart products={products}/>} />
      </Routes>
    </div>
  );
}

export default App;
