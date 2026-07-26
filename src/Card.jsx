import { useState } from "react";


function Card({ id,title, image, price,Instock ,addToCart}) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="card">
     

      <img src={image} width="150" />

      <h2>{title}</h2>

      <p>{price}$</p>
    {Instock ? (
  <p style={{color:"green"}}>✅ In Stock</p>
) : (
  <p style={{color:"red"}}>❌ Out of Stock</p>
)}

      <h3>❤️ {likes}</h3>
    <button onClick={() => addToCart({
  id,
  title,
  image,
  price
})}>
  Add To Cart 🛒
</button>
      <button onClick={() => setLikes(likes + 1)}>
        👍 Like
      </button>
      <button onClick={() => {
        if (likes >0 )
        {
          setLikes(likes -1)
          }
          }
          }>
👎 Unlike      </button>
      <button onClick={()=>setLikes(0)}>🔄 Reset</button>
    </div>
  );
}

export default Card;