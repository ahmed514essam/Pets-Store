import styles from './CatSoftFood.module.css'
import Products from '.././../Products.json'
import React, { useState, useEffect } from 'react';
import { getArticlesFromLocalS  } from "../../utils"
import CatSoftItem from './CatSoftItem';
export default function CatSoftFood() {
// const [ softs , setSofts] = React.useState(CatSoft.CatSoftFood);

const [cat , setCat] = useState([]);

const handleCategoryFilter = () => {
  const filtered = Products.foods.filter((food) => food.category === "CatSoft");
  setCat(filtered);
};


useEffect(() => {
  handleCategoryFilter();
}, []);


const [softArticles, setSoftArticles] = useState(
  getArticlesFromLocalS()
);
const softIds = softArticles.map( article => article.pid)
useEffect(() => {
  localStorage.setItem("articles", JSON.stringify(softArticles));
  
}, [softArticles]);
  return (
    <>
<section className={styles.onesec}>
        <h1>Cat Wet Food </h1>
        <p className={styles.pone}>
          Find the best Cats dry food in Egypt from all avaliable brands like
          Royal Canin, Josera, Belcando, Fokker and more, Shop Now!
        </p>
        <br></br>
        





<p className={styles.ptwo}>Showing 2.58 of 52 results</p>

        <div className={styles.content}>
          {cat.map((item) => (
        <CatSoftItem
        key={item.pid}
          pid={item.pid}
          name={item.name}
          Price={item.Price}
          image={item.image}
          setSoftArticles={setSoftArticles}
          isMyCart={softIds.includes(item.pid)}
        />
          ))}
        </div>
        </section>
    </>
  )
}
