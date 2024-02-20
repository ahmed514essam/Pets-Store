import { Link } from "react-router-dom";
import Products from "../../Products.json";
import style from "./CatDry.module.css";
import React, { useState, useEffect } from "react";
import Items from "./Components/Items";



export default function CatDryFood() {






 
  
  
  const [catdry, setCatdry] = useState([]);
  const handleCategoryFilter = () => {
    const filtered = Products.foods.filter((food) => food.category === "CatDry");
    setCatdry(filtered);
    
   
  };

  useEffect(() => {
    handleCategoryFilter();
    
  }, []);



    





  return (
    <>
      <section className={style.onesec}>
        <h1>Dry Food For Cats</h1>
        <p className={style.pone}>
          Find the best Cats dry food in Egypt from all available brands like
          Royal Canin, Josera, Belcando, Fokker and more, Shop Now!
        </p>
        <br />
        <div className={style.asd}>
          <div className={style.artical}>
            <span>
              تسوق دراي فود للقطط – شحن مجاني
              <br></br>
              يتوفر في متجر هابت افضل انواع دراي فود للقطط البالغة والقطط
              الصغيرة بداية من انواع الدراي فود ذات السعر المرتفع وصولا لانواع
              دراي فود رخيصة للقطط ويمكنك استعرضا الفروق في اسعار الدراي فود
              للقطط في مصر . يمكنك ايضا تسوق انواع دراي فود للقطط الشيرازي
              وغيرها من الفصائل قمنا بعمل فلتر في متجر اكل القطط يمكن اختيار
              المرحلة العمرية وفلترة اكل القطط الصغيرة من القطط البالغة كما
              يمكنك الاستعانه بنا ايضا من خلال الاونلاين شات او الاتصال علي
              01022337450 متجر اكل القطط في مصر يمكنك من المقارنة بين الشركات من
              حيث الجودة والسعر حيث يمكن تصفح مقال يوضح افضل انواع دراي فود
              للقطط في مصر من هنا نعرض منتجات الشركات الموثوقة في مصرمثل رويال
              كانين للقطط والذي يوفر انواع مثل royal canin hairball, Royal canin
              presian, Royal canin fit, Royal canin indoor وايضا منتجات رويال
              كانين العلاجية مثل Royal Canin so for cats, Royal canin renal for
              cats كما نوفر ايضا منتجات ميرا كات للقطط و جوزيرا للقطط و بيفي كات
              ومونيللو للقطط
              <br />
         
            </span>
          </div>
        </div>
        <p className={style.ptwo}>Showing 1–32 of 52 results</p>
        <div className={style.content}>
        
          {catdry.map((cat) => (
            <Items
              key={cat.pid}
              name={cat.name}
              Price={cat.Price}
              image={cat.image}
              pid={cat.pid}
             
      
            />
          ))}
        </div>
      </section>
     


    </>
  );
  
}
