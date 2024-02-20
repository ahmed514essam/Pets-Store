import React, { useEffect, useState } from "react";
import style from "./Canvas.module.css";

export default function CanvasItem({
  Price,
  name,
  image,
  pid,
  setFovouriteArticles,
}) {
  const RemoveFromCart = () => {
    setFovouriteArticles((prev) => prev.filter((item) => item.pid !== pid));
  };

  const [quan, setQuan] = useState(0);

  function adder() {
    if (quan >= 10) {
      setQuan((quan) => quan);
    } else {
      setQuan((quan) => quan + 1);
    }
  }
  function minuser() {
    if (quan <= 1) {
      setQuan((quan) => quan);
    } else {
      setQuan((quan) => quan - 1);
    }
  }
  const [sum, setSum] = useState();
  useEffect(() => {
    setSum(quan * Price);
  }, [quan]);

  return (
    <>
      <section>
        <div className={style.content}>
          <div className={style.imges}>
            <img src={image} />
          </div>
          <div className={style.det}>
            <h3>{name}</h3>
            <p>
              Price : <span>{Price} </span> <span className="col-1">EGP</span>
            </p>
          </div>

          <button className={style.button} onClick={RemoveFromCart}>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </section>
    </>
  );
}
