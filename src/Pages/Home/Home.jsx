import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import show from "./CompoHome.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCcVisa }  from '@fortawesome/free-solid-svg-icons';


// import faTruck  from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill }  from '@fortawesome/free-solid-svg-icons';
import IconOne from "./IconOne/IconOne";
import IconTwo from "./IconTwo/IconTwo";



export default function Home() {
  const navigate = useNavigate();

  function dogstore() {
    navigate("/Dogs");
  }
  function catstore() {
    navigate("/Cats");
  }
  function catFood() {
    navigate("/Cat Dry Food");
  }
  function softCick() {
    navigate("/Cats Soft Food");
  }
  function catlitterClick() {
    navigate("/Cats Litters");
  }
  function DogDry() {
    navigate("/Dog Dry Food");
  }
  return (
    <>
      <section className={show.firstthig}>
        <img
          className={show.oneimgsec}
          src="/winter-collection-tablet.webp"
        />
        <img
          className={show.twoimgsec}
          src="/winter-collection-banner-1.webp"
        />

        <div className={styles.sectwo}>
          <div className={styles.dogimg}>
            <img
              onClick={dogstore}
             
              src="/dogstore.webp"
            />
          </div>
          <div className={styles.catimg}>
            <img
              onClick={catstore}
              alt=""
              src="/catstore.webp"
            />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}

      {/* ================================================================ */}
      <section className={show.secthree}>
        <h2>Popular Categories</h2>
        <div className={show.content}>
          <div className={show.storespro}>
            <img
              onClick={catFood}
              alt="cat dry food "
              src="/cat dry food.webp"
            />{" "}
          </div>
          <div className={show.storespro}>
            <img
              onClick={DogDry}
              alt="dog dry food"
              src="/dig dry food.webp"
            />{" "}
          </div>
          <div className={show.storespro}>
            <img
              onClick={softCick}
              alt="cat soft food"
              src="/cat soft food.webp"
            />{" "}
          </div>
          <div className={show.storespro}>
            <img
              onClick={catlitterClick}
              alt="cat litter"
              src="/cat litter.webp"
            />{" "}
          </div>
        </div>
      </section>

      <section className={styles.iconek}>
       
<IconOne/>
        <div className={styles.containerico}>
          <div className={styles.iconaya}>
          <FontAwesomeIcon className="fs-2" icon={faMoneyBill} />
          </div>
          <div className={styles.readicoy}>شحن مجانى فوق 500ج</div>
        </div>
<IconTwo/>
      
      </section>

      <section id="bradsids" className={show.secfour}>
        <h2>Best Selling Brands</h2>
        <div className={show.allimges}>
          <div className="g-col-lg-4 g-col-md-4">
            <img src="/Brands/Artboard-2 (1).webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="/Brands/Artboard-2-1.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="/Brands/Artboard-2-copy-10.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="/Brands/Artboard-2-copy-2.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="/Brands/Artboard-2-copy-3.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="/Brands/Artboard-2-copy-4.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="/Brands/Artboard-2-copy-5.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="/Brands/Artboard-2-copy-6.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="/Brands/Artboard-2-copy-7.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="/Brands/Artboard-2-copy-9.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="/Brands/Artboard-2-copy.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="/Brands/Artboard-2.webp" />
          </div>
        </div>
      </section>
    </>
  );
}
