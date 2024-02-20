import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import show from "./CompoHome.module.css";

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
          src="../../../public/winter-collection-tablet.webp"
        />
        <img
          className={show.twoimgsec}
          src="../../../public/winter-collection-banner-1.webp"
        />

        <div className={styles.sectwo}>
          <div className={styles.dogimg}>
            <img
              onClick={dogstore}
              alt=""
              src="../../../public/dogstore.webp"
            />
          </div>
          <div className={styles.catimg}>
            <img
              onClick={catstore}
              alt=""
              src="../../../public/catstore.webp"
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
              src="../../../public/cat dry food.webp"
            />{" "}
          </div>
          <div className={show.storespro}>
            <img
              onClick={DogDry}
              alt="dog dry food"
              src="../../../public/dig dry food.webp"
            />{" "}
          </div>
          <div className={show.storespro}>
            <img
              onClick={softCick}
              alt="cat soft food"
              src="../../../public/cat soft food.webp"
            />{" "}
          </div>
          <div className={show.storespro}>
            <img
              onClick={catlitterClick}
              alt="cat litter"
              src="../../../public/cat litter.webp"
            />{" "}
          </div>
        </div>
      </section>

      <section className={styles.iconek}>
        <div className={styles.containerico}>
          <div className={styles.iconaya}>
            <i class="fa-brands fa-cc-visa"></i>
          </div>
          <div className={styles.readicoy}>
            الدفع متاح كاش او فيزا او اونلاين
          </div>
        </div>

        <div className={styles.containerico}>
          <div className={styles.iconaya}>
            <i class="fa-solid fa-money-bill-1"></i>
          </div>
          <div className={styles.readicoy}>شحن مجانى فوق 500ج</div>
        </div>

        <div className={styles.containerico}>
          <div className={styles.iconaya}>
            <i class="fa-solid fa-truck"></i>
          </div>
          <div className={styles.readicoy}>توصيل نفس اليوم</div>
        </div>
      </section>

      <section id="bradsids" className={show.secfour}>
        <h2>Best Selling Brands</h2>
        <div className={show.allimges}>
          <div className="g-col-lg-4 g-col-md-4">
            <img src="../../../public/Brands/Artboard-2 (1).webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="../../../public/Brands/Artboard-2-1.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="../../../public/Brands/Artboard-2-copy-10.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="../../../public/Brands/Artboard-2-copy-2.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="../../../public/Brands/Artboard-2-copy-3.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="../../../public/Brands/Artboard-2-copy-4.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="../../../public/Brands/Artboard-2-copy-5.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="../../../public/Brands/Artboard-2-copy-6.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="../../../public/Brands/Artboard-2-copy-7.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="../../../public/Brands/Artboard-2-copy-9.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="../../../public/Brands/Artboard-2-copy.webp" />
          </div>

          <div className="g-col-lg-4 g-col-md-4">
            <img src="../../../public/Brands/Artboard-2.webp" />
          </div>
        </div>
      </section>
    </>
  );
}
