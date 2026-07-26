function Cart({cart ,removeFromCart ,increasQuantity ,decreasQuantity}) {
const totalPrice = cart.reduce((total ,product ) =>{
    return total +product.price
},0)

if (cart.length === 0) {
  return <h2>Cart is empty 🛒</h2>;
}
 
    return (
   <div>

<h2>Shopping Cart 🛒</h2>

{
cart.map(product=>(
<div
key={product.id}


>

<h3>{product.title}</h3>
<p>
${product.price * product.quantity}
</p>
<p>
Quantity: {product.quantity}
</p>
<button onClick={()=>increasQuantity(product.id)}>+</button>
<button onClick={()=>decreasQuantity(product.id)}>-</button>
  <h3>
            Subtotal: ${product.price * product.quantity}
          </h3>

<button onClick={()=>removeFromCart(product.id)}>Remove</button>


</div>


))}

  <h2> Total : {totalPrice}</h2>









   </div>
   
)
  
}


export default Cart;