import React, { useState, useEffect } from "react";
import styles from "./CatsLitter.module.css";
import Products from "../../Products.json";
import LittersItems from "./LittersItems";
import { getArticlesFromLocalS  } from "../../utils"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function CatsLitters() {





  const [litter, setLitter] = useState([]);

  const handleCategoryFilter = () => {
    const filtered = Products.foods.filter(
      (food) => food.category === "CatLitter"
    );
    setLitter(filtered);
  };

  useEffect(() => {
    handleCategoryFilter();
  }, []);

  const [litterArticles, setLitterArticles] = useState(
    getArticlesFromLocalS()
  );
  const litterIds = litterArticles.map( article => article.pid)
  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(litterArticles));
    
  }, [litterArticles]);

  return (
    <>
      <section className={styles.onesec}>
        <h1>For Your Litter Cat</h1>
        <p className={styles.pone}>
          Find the best products in Egypt from all avaliable brands like Royal
          Canin, Josera, Belcando, Fokker and more, Shop Now!
        </p>
        <br></br>

        <div className={styles.content}>
          {litter.map((item) => (
            <LittersItems
              key={item.pid}
              name={item.name}
              Price={item.Price}
              image={item.image}
              pid={item.pid}
              isMyCart={litterIds.includes(item.pid)}
              setLitterArticles={setLitterArticles}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default CatsLitters;
