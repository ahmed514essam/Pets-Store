import React from 'react'
import styles from './DogDry.module.css'

function DogDryItem({ Price , name , image , pid ,  isMyCart , setDogArticles}) {

  const addToCart = () => {
    setDogArticles((prev) => [...prev, { Price, name, image , pid  }]);
  
  };

  const RemoveFromCart = () => {
    setDogArticles(prev => prev.filter(item => item.pid !== pid) );
  };


  return (
    <div >
    <div className={styles.allmg}>
      <div className={styles.imgfood}>
        <img alt=" " src={image} />
      </div>
      <h2>{name}</h2>
      <h3>{Price}</h3>
      { isMyCart ? 
          <button className={styles.butt} onClick={RemoveFromCart}>Remove From Cart</button>
         : 
          <button className={styles.butt} onClick={addToCart}>Add To Cart</button>
        }
     
    </div>
    
  </div>
  )
}

export default DogDryItem