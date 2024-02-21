import React from 'react'
import styles from './CatsLitter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

function LittersItems({ image , name , Price ,pid , isMyCart , setLitterArticles}) {



  const addToCart = () => {
    setLitterArticles((prev) => [...prev, { Price, name, image , pid  }]);
  
  };

  const RemoveFromCart = () => {
    setLitterArticles(prev => prev.filter(item => item.pid !== pid) );
  };

  return (
    <div>
    <div className={styles.allmg}>
      <div className={styles.imgfood}>
        <img alt=" " src={image} />
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

export default LittersItems