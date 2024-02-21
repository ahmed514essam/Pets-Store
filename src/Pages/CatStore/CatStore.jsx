import React from 'react'
import style from './CatStore.module.css'
import catsData from '../../catsData.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export default function CatStore() {
  const [cats , setCats] = React.useState(catsData.cats);
  return (
    <>
      <section className={style.one}>
      <h1 className={style.hone}>Cats</h1>
    <h5>We have alot of Cats</h5>
<div className={style.container}>
  {cats.map(cat => (

    <div className={style.memsec} key={cat.id}>
        
        <div className={style.mapImge}><img alt='Dog Imge for sale' src={cat.image} /></div>
        <div className={style.detalis}>
        <h2><span className={style.spanName}>{cat.name}</span></h2>
        
        
        <p>Price :<span className={style.spanone}>{cat.Price}</span> </p>
        </div>
       
        <div className={style.btns}>
        <Link className={style.lio} to={`/Profile/${cat.id}`}><button className={style.read}>Read More</button></Link>
        
        </div>
        
      </div>


  ))};
</div>

      </section>
      <section className={style.two}>
<h3>There's always more</h3>
<p>Thank you for choosing our Pets Store as your preferred destination for all things pet-related. We are honored to be part of your journey in caring for and cherishing your pets. Our commitment to excellence extends beyond products; we aim to build a community that celebrates the joy, companionship, and unconditional love that pets bring into our lives.</p>
       </section>
    </>
  )
}
