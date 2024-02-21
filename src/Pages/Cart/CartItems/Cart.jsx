import React, { useEffect, useState } from "react";
import { getArticlesFromLocalS } from "../../../utils";
import CartItems from "../CartItems/CartItems";
import styles from "./cssMod/MyCart.module.css";

function Cart() {
  const [fovouriteArticles, setFovouriteArticles] = useState(
    getArticlesFromLocalS()
  );
  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(fovouriteArticles));
  }, [fovouriteArticles]);





  return (
    <>
      <main>
        <h1 className={styles.headone}>Your Cart</h1>

        {fovouriteArticles.length === 0 ? (
          <p className="fs-2 fw-bolder text-center text-danger">Cart Empty</p>
        ) : null}

       
        <div className={styles.bgc}>
          {fovouriteArticles.map((article) => (
            <CartItems
              key={article.pid}
              pid={article.pid}
              name={article.name}
              Price={article.Price}
              image={article.image}
              setFovouriteArticles={setFovouriteArticles}
            />
          
          ))}
        </div>
      </main>
      <section className={styles.twosec}>
        <div className={styles.twodiv}>
          <table>
            <tr>
              <td>ندفع الشحن عنك للاوردرات فوق 500ج في القاهرة والجيزة</td>
              <td className={styles.namerow}>التوصيل</td>
            </tr>
            <tr>
              <td>
                مجاني في خلال اسبوعين داخل القاهره والجيزة لأي عيوب تصنيع او
                توايخ الصلاحية
              </td>
              <td className={styles.namerow}>الاسترجاع</td>
            </tr>
            <tr>
              <td>
                <img src="/public/dolar.png" />
                <img src="/public/visa.png" />
              </td>
              <td className={styles.namerow}>طرق الدفع</td>
            </tr>
            <tr>
              <td className={styles.listtable}>
                <h4 className={styles.h4}>
                  التوصيل نفس اليوم للطلبات قبل 12 ظهرا داخل القاهرة والجيزة
                </h4>
                <p>التوصيل من 12 ظهرا حتى 10 مساءا حسب خطوط السير</p>
                <p>باقي المحافظات في خلال 2-3 ايام عمل</p>
                <p>لا يوجد توصيل يوم الجمعة</p>
              </td>
              <td className={styles.namerow}>مده التوصيل</td>
            </tr>
          </table>
        </div>
      </section>
    </>
  );
}
export default Cart;
