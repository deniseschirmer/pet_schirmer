import React, { useEffect, useState } from "react";

// import { BiMenuAltRight } from "react-icons/bi";
// import { AiOutlineClose } from "react-icons/ai";
import { TbBrandFacebook } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";

import styles from "../styles/Header.module.scss";
import { Link, useHistory } from "react-router-dom";

import logo from "../assets/foto.png";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className={styles["header"]}>
      <div className={styles["header__content"]}>
        <Link to="/" className={styles["header__content__logo"]}>
          <img src={logo} alt="logo" width={"80px"} />
        </Link>
        <nav className={styles["header__content__nav"]}>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Banhoetosa">Banho e Tosa</Link>
            </li>
            <li>
              <Link to="/consultorio">Consultório</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
            <li>
              <Link to="https://www.facebook.com/petschiirmer/">
                <TbBrandFacebook width={"25px"} />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/petschirmer/">
                <BsInstagram width={"25px"} />
              </Link>
            </li>
          </ul>
        </nav>
        {toggleMenu ? (
          <div className={styles["toggle-button"]}>
            <RiCloseLine
              color="#206128"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          </div>
        ) : (
          <div className={styles["toggle-button"]}>
            <RiMenu3Line
              color="#206128"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          </div>
        )}
      </div>

      {toggleMenu && (
        <div className={styles["header__navbar-menu"]}>
          <div className={styles["header__navbar-menu_container"]}>
            <div className={styles["header_navbar-menu_container-links"]}>
              <ul>
                <li>
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                  <Link to="/Banhoetosa">Banho e Tosa</Link>
                </li>
                <li>
                  <Link to="/consultorio">Consultório</Link>
                </li>
                <li>
                  <Link to="/contato">Contato</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
