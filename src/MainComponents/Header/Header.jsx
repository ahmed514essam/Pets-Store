import { Link, NavLink } from "react-router-dom";
import "./Head.css";
import style from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import CanVas from "./CanVas";
import { useState } from "react";
export default function Header() {
  const [openm, setOpem] = useState(false);

  function openmenu() {
    setOpem(true);
  }

  function closem() {
    setOpem(false);
  }

  function asdf() {
    setOpem(false);
  }

  return (
    <header className={style.parent}>
      {/* ================================================ */}
      <nav className={style.one}>
        <div className={style.lks}>
          <Link className={style.lis} to="/">
            Sign Up
          </Link>
          <Link className={style.lis} to="/About">
            About
          </Link>

          {/* ===================================================== */}

          <CanVas />
        </div>
      </nav>

      {/* =================================================== */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom  w-100 z-3 ">
        <div className="container-fluid">
          <h1 className="honeheader  fs-2" href="#">
            Scooby Doo
          </h1>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"}>
                  {" "}
                  <span
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </span>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dog Store
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={"/Dogs"} className="dropdown-item" href="#">
                      Dogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Dog Dry Food"}
                      className="dropdown-item"
                      href="#"
                    >
                      Dog Dry Food
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cat Store
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={"Cats"} className="dropdown-item" href="#">
                      Cats
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"Cat Dry Food"}
                      className="dropdown-item"
                      href="#"
                    >
                      Cat Dry food
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"Cats Soft Food"}
                      className="dropdown-item"
                      href="#"
                    >
                      Cat Soft food
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"Cats Litters"}
                      className="dropdown-item"
                      href="#"
                    >
                      Cats Litter
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item ">
                <Link className="nav-link " to="#bradsids">
                  Brands
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Accout"}>
                  My Account
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/your cart"}>
                  Cart
                </Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-0  border border-end-0"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button
                className="buttonformheader   border border-start-0 "
                type="submit"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* ============================================================= */}

      {/* 
      <div className={style.main}>
       <Link to={"/"} className="text-decoration-none"><h1 >Scooby Doo</h1></Link> 
        <nav className={style.navyes}>






          <button className="btn-can " id={style.fgg} data-bs-toggle="dropdown" aria-expanded="false">
          Dog Store
          </button>
          <ul className="dropdown-menu dropdown-menu-white mylist  ">
            <li><a className="dropdown-item " href="#">Dry Food for Dogs</a></li>
            <li><a className="dropdown-item" href="#">Dog Food Wet</a></li>
            <li><a className="dropdown-item" href="#">Veterinary Diet Food</a></li>
          </ul>
     
          <button className="btn-can  " id={style.fgg} data-bs-toggle="dropdown" aria-expanded="false">
          Cat Store
          </button>
          <ul className="dropdown-menu dropdown-menu-white">
          <li><a className="dropdown-item" href="#">Dry Food for Cats</a></li>
            <li><a className="dropdown-item" href="#">Cats Food Wet</a></li>
            <li><a className="dropdown-item" href="#">Cat Vit food Food</a></li>
          </ul>

          

          
          <NavLink className="linkes">Brands </NavLink>
          <NavLink className="linkes">Blog</NavLink>
          <NavLink to={"/your cart"} className="linkes ">Shopping Cart</NavLink>
          
        </nav>
        
<div className={style.twocac}>
<CanVas/>
</div>
 */}

      {/* <div className={style.inpute}>
        <span className={style.spanmenulist}>
          <input placeholder="search..." />
          <button>
            <FontAwesomeIcon   icon={faMagnifyingGlass} />
          </button>
          </span>


          <div className={style.menuli}>
          <button onClick={openmenu}>
<span className={style.mySpan}>
<i className="fa-solid fa-bars"></i>
</span>
</button>
</div>


        </div>
      </div> */}

      {/* {openm ? <div className={style.cover}>


<div className={style.iconA}>
<button onClick={closem}>
<div className={style.closer}>
<i className="fa-regular fa-circle-xmark"></i>
</div>
</button>
</div>


<div className={style.styleList}>
<div className={style.lists}>
  <Link onClick={asdf} to={"/"} className={style.myLinky}>Home</Link>
  <Link onClick={asdf} to={"/Dogs"} className={style.myLinky}>Dogs Store</Link>
<Link onClick={asdf} to={"/Cats"} className={style.myLinky}>Cats Store</Link>
<Link onClick={asdf} to={"//Dog Dry Food"} className={style.myLinky}>Dogs Dry Food</Link>
<Link onClick={asdf} to={"/Cat Dry Food"} className={style.myLinky}>Cats Dry Food</Link>
<Link onClick={asdf} to={"/Cats Soft Food"} className={style.myLinky}> Cats Soft Food </Link>
<Link onClick={asdf} to={"/Cats Litters" } className={style.myLinky}>Cats Litter</Link>
<Link onClick={asdf} to={"/Account"} className={style.myLinky}>Account</Link>
</div>
</div>


</div>  : null} */}
    </header>
  );
}
