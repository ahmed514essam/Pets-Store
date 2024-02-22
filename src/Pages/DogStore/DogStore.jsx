import style from "./DogStore.module.css";
import dummyData from "../../dummyData.json";

// import dummyData from '../../dummyData.json';
// import  useState    from 'react';

import React from "react";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

export default function DogStore() {
  const [pets, petsSet] = React.useState(dummyData.pets);




  return (
    <>
      <section className={style.one}>
        <h1 className={style.hone}>Dog</h1>
        <h5>We have alot of dogs</h5>

        <div className={style.container}>
          {pets.map((pet) => (
            <div className={style.memsec} key={pet.id}>
              <div className={style.mapImge}>
                <img alt="Dog Imge for sale" src={pet.image} />
              </div>
              <div className={style.detalis}>
                <h2>
                  <span className={style.spanName}>{pet.name}</span>
                </h2>

                <p>
                  Price :<span className={style.spanone}>{pet.Price}</span>{" "}
                </p>
              </div>

              <div className={style.btns}>
           <Link className={style.lio} to={`/${pet.id}`}> <button  className={style.read}>Read More</button></Link>
               
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={style.two}>
        <h3>There's always more</h3>
        <p>
          Thank you for choosing our Pets Store as your preferred destination
          for all things pet-related. We are honored to be part of your journey
          in caring for and cherishing your pets. Our commitment to excellence
          extends beyond products; we aim to build a community that celebrates
          the joy, companionship, and unconditional love that pets bring into
          our lives.
        </p>
      </section>

<ScrollToTopButton/>


    </>
  );
}
