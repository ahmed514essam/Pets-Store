
import React, { useState, useEffect } from 'react';
import styles from './DogDry.module.css'
import Products from "../../Products.json";
import DogDryItem from './DogDryItem';
import { getArticlesFromLocalS  } from "../../utils"
function DogDry() {
   
    const [dog , setDog] = useState([]);

    const handleCategoryFilter = () => {
      const filtered = Products.foods.filter((food) => food.category  === "DogDry");
      setDog(filtered);
    };
    
    
    useEffect(() => {
      handleCategoryFilter();
    }, []);
    
    
    const [dogArticles, setDogArticles] = useState(
      getArticlesFromLocalS()
    );
    const dogsIds = dogArticles.map( article => article.pid)
    useEffect(() => {
      localStorage.setItem("articles", JSON.stringify(dogArticles));
      
    }, [dogArticles]);
    
    
    
      return (
        <>
        <section className={styles.onesec}>
       
          <h1>Dry Food For Dogs</h1>
          <p className={styles.pone}>
            Find the best products  in Egypt from all avaliable brands like
            Royal Canin, Josera, Belcando, Fokker and more, Shop Now!
          </p>
          <br></br>
         
    
          <div className={styles.content}>
            {dog.map((item) => (
          
          <DogDryItem 
            key={item.pid}
            name={item.name}
            Price={item.Price}
            image={item.image}
            pid={item.pid}
            setDogArticles={setDogArticles}
            isMyCart={dogsIds.includes(item.pid)}
          />
            ))}
          </div>
        </section>
        
      </>
      )
    }
    
   

export default DogDry