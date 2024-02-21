import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  const navigate = useNavigate();

  const Accoute = () => {
    navigate("/Accout");
  };

  const yourcarte = () => {
    navigate("/your cart");
  };

  return (
    <footer className={styles.Footbig}>
      <div className={styles.main}>
        <div className={styles.one}>
          <h3>Contact Info </h3>
          <p>010 94 46 1846</p>
          <a>0000 1111 555 222</a>
          <div className={styles.allsocial}>
            <NavLink>
              <div className={styles.imgesm}>
                <img alt="non" src="/public/whatsap.jfif" />
              </div>
            </NavLink>
            <NavLink>
              <div className={styles.imgesmk}>
                <img alt="non" src="/public/instagram.jfif" />
              </div>
            </NavLink>
          </div>
          <NavLink>
            <div className={styles.imgesml}>
              <img alt="non" src="/public/facebook.png" />
            </div>
          </NavLink>
        </div>
        <div className={styles.two}>
          <h3>my Account</h3>
          <ul>
            <li onClick={Accoute}>My Account</li>
            <li>My Wishlist</li>
            <li>Checkout</li>
            <li onClick={yourcarte}>Cart</li>
            <li>Shopping and return policy</li>
            <li>Leave Your Feedback</li>
          </ul>
        </div>
        <div className={styles.three}>
          <h3>Payement Accepted</h3>
          <ul>
            <li>
              <div className={styles.imgesd}>
                <img  src="/public/dolar.png" />
              </div>
            </li>
            <li>
              <div className={styles.imgesv}>
                <img  src="/public/visa.png" />
              </div>
            </li>
            <li>
              <div className={styles.imges}>
                <img  src="/public/ssl.jfif" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.ends}>
        <h3>Copyright © 2023-2024 Scoopy Doo. All Rights Reserved. </h3>
      </div>
    </footer>
  );
}
