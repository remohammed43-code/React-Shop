import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import "./App.css";
import Cart from "./Cart";

import { useState ,useEffect } from "react";
function App() {
  const [ products ,setProducts] = useState ([])
  const [loading ,setLoading] = useState(true)
  const [error ,setError] = useState("")
  const [search , setSearch] = useState("")
  const [cart ,setCart] =useState([])

 function removeFromCart(id) {
  setCart(
    cart.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity - 1 }
        : product
    )
    .filter((product) => product.quantity > 0)
  );
}
  function addToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  }
  function increasQuantity(id) {
    setCart(
      cart.map((product)=>
      product.id === id
      ?{...product ,quantity  : product.quantity +1} : product
    ))
  }

  function decreasQuantity(id) {
    setCart(
      cart
        .map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  }
  
 useEffect(()=>{
  fetch("https://fakestoreapi.com/products")
  .then (respond=>respond.json())
.then((data) => {
    setProducts(data);
    setLoading(false);
})
 .catch(() => {
  setError("Failed to load products.");
  setLoading(false);
});
 },[]);
   if (loading) {
    return <h1>Loading...</h1>;
}
if (error) {
  return <h1>{error}</h1>
  
}
  return (
<>
    <Header />
    <Navbar />
   <h2>
🛒 Cart: {
  cart.reduce((total, product)=> total + product.quantity, 0)
}
</h2>
    <input type="text" placeholder="Search..."  value={search} onChange={(e)=>setSearch(e.target.value)}/>
   <div className="products">
    {products
 .filter((product)=>
product.title.toLowerCase().includes(search.toLowerCase()))
    
    
    
    .map((product)=>
    <Card

  key={product.id}
  id={product.id}
  title={product.title}
  price={product.price}
  image={product.image}
  addToCart={addToCart}

/>
    
    
    
    )}
   </div>
      <Cart cart = {cart}
      removeFromCart ={removeFromCart}
      increasQuantity ={increasQuantity}
      decreasQuantity ={decreasQuantity}
      />
       <Footer />
      </>
  
  
  )

}
export default App