import React from "react";
import style from "../CatDry.module.css";
import { useState , useEffect } from "react";
import ExtraItems from "./ExtraItems";
import { getArticlesFromLocalS  } from "../../../utils"
export default function Items({
  Price,
  name,
  image,
  pid ,
}) {

  const [cartArticles, setCartArticles] = useState(
    getArticlesFromLocalS()
  );
  const cartIds = cartArticles.map( article => article.pid)
  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(cartArticles));
    console.log(cartIds);
  }, [cartArticles]);



  return (
    <div>
      <div className={style.allmg}>
        <div className={style.imgfood}>
          <img alt="Cat Dry Food" src={image} />
        </div>

        <h2>{name}</h2>
        <h3>{Price}</h3>

       
<ExtraItems
key={pid}
        isMyCart={cartIds.includes(pid)}
        
  Price={Price}
  name={name}
  image={image}
  pid={pid}
  setCartArticles={setCartArticles}

/>
       
      </div>
    </div>
  );
}
