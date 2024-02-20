import React from 'react'
import styles from './CatSoftFood.module.css'


function CatSoftItem({ image  , Price , name ,pid,setSoftArticles ,  isMyCart}) {




  const addToCart = () => {
    setSoftArticles((prev) => [...prev, { Price, name, image , pid  }]);
  
  };

  const RemoveFromCart = () => {
    setSoftArticles(prev => prev.filter(item => item.pid !== pid) );
  };


  return (
    <div>
              <div className={styles.allmg}>
                <div className={styles.imgfood}>
                  <img alt="Cat Soft Food" src={image} />
                </div>
                <h2>{name}</h2>
                <h3>{Price}</h3>
                { isMyCart ? 
          <button onClick={RemoveFromCart}>Remove From Cart</button>
         : 
          <button onClick={addToCart}>Add To Cart</button>
        }
                
              </div>
           
            </div>
  )
}

export default CatSoftItem