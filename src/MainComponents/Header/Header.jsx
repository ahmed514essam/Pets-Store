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

     


    </header>
  );
}
