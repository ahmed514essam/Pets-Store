import React from 'react'
import style from "../CatDry.module.css"
export default function ExtraItems({isMyCart  ,
    Price,
    name,
    image,
    pid ,
    setCartArticles,
   }) {

    const addToCart = () => {
        setCartArticles((prev) => [...prev, { Price, name, image , pid  }]);
      
      };
    
      const RemoveFromCart = () => {
        setCartArticles(prev => prev.filter(item => item.pid !== pid) );
      };

  return (
<div>
{ isMyCart ? 
          <button onClick={RemoveFromCart}>Remove From Cart</button>
         : 
          <button onClick={addToCart}>Add To Cart</button>
        }
</div>
  )
}
