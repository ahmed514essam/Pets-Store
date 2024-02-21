import { useEffect } from "react";
import styles from './CatsProfile.module.css'
import { Link, useParams } from "react-router-dom";
import catsData from "../../catsData.json";
import { useState } from "react";

export default function CatsProfile() {
  const { id } = useParams();
  const [filterIte, setFilterIte] = useState({});

  const handleCategoryFilter = (categoryId) => {
    const filtered = catsData.cats.find((cat) => cat.id == categoryId);
    setFilterIte(filtered);
  };

  useEffect(() => {
    handleCategoryFilter(id);
  }, [id]);

  return (
   <>
   <nav className={styles.nav2}>
    <div className={styles.divNav}>
      <Link className={styles.linky} to="/">Home</Link>
      <Link className={styles.linky} to="/Cats">Cats</Link>
      <Link className={styles.linky} to="/Cat Dry Food">Cats Food</Link>
    </div>
   </nav>
<section className={styles.onesec}>

<div className={styles.imges}>
<img src={filterIte.image}/>

</div>

<div className={styles.details}>
<div className={styles.author}>
<h1>{filterIte.name} </h1>
<div className={styles.stars}>
  <ul>

  <li>
  <i className="fa-solid fa-star"></i>
  </li>
  <li>
  <i className="fa-solid fa-star"></i>
  </li>
  <li>
  <i  className="fa-solid fa-star"></i>
  </li>
  <li>
  <i className="fa-solid fa-star"></i>
  </li>
  <li>
  <i className="fa-solid fa-star "></i>
  </li>
  </ul>
</div>
<h3>Type of animal :  <span>{filterIte.species}</span> </h3>
<h2>After Offers :  <span className={styles.spanprice}>{filterIte.Price}</span> </h2>

<div className={styles.btns}>
<button className={styles.buy}>Buy Now</button>
<button className={styles.add}>Add To Cart</button>
</div>

{/* ======================================================================= */}
<div className={styles.about}>

<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Read More
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>About The Cat</strong> Regardless of coat color, regular veterinary care is essential to ensure the overall health and well-being of any dog.
Some breeds may be prone to specific health issues, so it's important to be aware of 

Poodle: Comes in various sizes, including the standard and miniature, and can have a black curly coat.
      </div>
    </div>
  </div>
  
  
</div>
</div>
{/* =================================================================== */}


</div>
</div>
</section>

<section className={styles.twosec}>
<div className={styles.twodiv}>
  <table >
    <tr>
      <td>ندفع الشحن عنك للاوردرات فوق 500ج في القاهرة والجيزة</td>
      <td className={styles.namerow}>التوصيل</td>
    </tr>
    <tr>
      <td>مجاني في خلال اسبوعين داخل القاهره والجيزة لأي عيوب تصنيع او توايخ الصلاحية</td>
    <td className={styles.namerow}>الاسترجاع</td>
    </tr>
    <tr>
      <td>
        <img src="/dolar.png"/>
        <img src="/visa.png"/>
      </td>
      <td className={styles.namerow}>طرق الدفع</td>
    </tr>
    <tr>
      <td className={styles.listtable}><h4 className={styles.h4}>التوصيل نفس اليوم للطلبات قبل 12  ظهرا داخل القاهرة والجيزة</h4><p>التوصيل من 12 ظهرا حتى 10 مساءا حسب خطوط السير</p><p>باقي المحافظات في خلال 2-3 ايام عمل</p><p>لا يوجد توصيل يوم الجمعة</p></td>
   <td className={styles.namerow}>مده التوصيل</td>
    </tr>
  </table>
</div>
</section>
</>
  );
}