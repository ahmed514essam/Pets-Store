import React, { useEffect, useState } from "react";
import style from "./cssMod/MyCart.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function CartItems({ Price, name, image, pid, setFovouriteArticles }) {
  const RemoveFromCart = () => {
    setAlert(true);
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
    setSum((quan * Price).toFixed(2));
  }, [quan]);

  const [Alert, setAlert] = useState(false);
  function Canceling() {
    setAlert(false);
  }
  function removefrom() {
    setFovouriteArticles((prev) => prev.filter((item) => item.pid !== pid));
    setAlert(false);
  }



  const navigate = useNavigate();

const [mustlog , setMustlog] = useState(false);

const checkregbuy = () => {
  const storedUserData = localStorage.getItem('userData');
  if (storedUserData) {
    navigate("/Accout")
  }else {
    setMustlog(true)
  }

  
}




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
            <div className={style.quantity}>
              <button onClick={minuser} className={style.minus}>
                -
              </button>
              <span className={style.result}>{quan}</span>
              <button onClick={adder} className={style.plus}>
                +
              </button>
            </div>
          </div>
          <div className={style.asdff}>
            <p>{sum} EGP</p>
         
            <button onClick={checkregbuy} className={style.buybnts}>Buy Now</button>
        
            {mustlog ? (
<div className="text-center">
  <p className="text-danger d-inline">Please Register to buy what do you wat</p>  <p className="fs-2 text-danger d-inline"><i className="fa-solid fa-triangle-exclamation"></i></p>

</div>) : null
}

          </div>

          <button className={style.button} onClick={RemoveFromCart}>
          <img className={style.rubbish} src="/rubbish.jfif" />
          </button>
        </div>
      </section>

      {Alert ? (
        <div className={style.overlay}>
          <div className={style.alert}>
            <h4>Are You Sure !</h4>
            <p>this mean that you remove this product from here</p>
            <div className={style.btnalert}>
              <button onClick={removefrom}>Yes</button>
              <button onClick={Canceling}>Cancel</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
      
}
export default CartItems;
