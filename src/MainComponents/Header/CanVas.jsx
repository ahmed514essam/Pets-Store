import React, { useEffect, useState } from "react";
import { getArticlesFromLocalS } from "../../utils";
import CanvasItem from "./CanvasItem";
import styles from "./Canvas.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import "./Head.css"
function CanVas() {
  const [fovouriteArticles, setFovouriteArticles]=useState(
    getArticlesFromLocalS()
  );
  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(fovouriteArticles));
  }, [fovouriteArticles]);
  return (
    <>
      <button
        className={styles.btn}
        id="side"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
      >
<span className="position-relative">
       <div className="icaryio position-absolute p-1 z-3 text-wight rounded-pill  bg-danger  "> {fovouriteArticles.length}</div><div className="cary position-relative   p-1 rounded-pill  "><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
</span>
      </button>

      <div
        className="offcanvas offcanvas-end "
        tabIndex="-1"
        id="offcanvasRight"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Shopping Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {fovouriteArticles.length === 0 ? <p>Nothing</p> : null}
          <div className={styles.bgc}>
            {fovouriteArticles.map((article) => (
              <CanvasItem
                key={article.pid}
                pid={article.pid}
                name={article.name}
                Price={article.Price}
                image={article.image}
                setFovouriteArticles={setFovouriteArticles}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CanVas;
