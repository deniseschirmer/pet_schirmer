// import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { TbBrandFacebook } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";

import classes from "../styles/Header.module.scss";
import { Link, useHistory } from "react-router-dom";

import logo from "../assets/foto.png";

const Header = () => {
  // const history = useHistory();
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [size, setSize] = useState({
  //   width: undefined,
  //   height: undefined,
  // });

  // useEffect(() => {
  //   const handleResize = () => {
  //     setSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   };
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useEffect(() => {
  //   if (size.width > 768 && menuOpen) {
  //     setMenuOpen(false);
  //   }
  // }, [size.width, menuOpen]);

  // const menuToggleHandler = () => {
  //   setMenuOpen((p) => !p);
  // };

  // const ctaClickHandler = () => {
  //   menuToggleHandler();
  //   history.push("/Contato");
  // };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          <img src={logo} alt="logo" width={"80px"} />
        </Link>
        <nav className={classes.header__content__nav}>
          <ul>
            <li>
              <Link
                to="/Home"
                // onClick={menuToggleHandler}
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/Banhoetosa">Banho e Tosa</Link>
            </li>

            <li>
              <Link to="/consultorio">Consultório</Link>
            </li>
            <li>
              <Link to="#">Contato</Link>
            </li>
            <li>
              <Link to="#">
                <TbBrandFacebook width={"25px"} />
              </Link>
            </li>
            <li>
              <Link to="#">
                <BsInstagram width={"25px"} />
              </Link>
            </li>
          </ul>
        </nav>
        <div className={classes.header__content__toggle}>
          <BiMenuAltRight /> <AiOutlineClose />
        </div>
      </div>
    </header>
  );
};

export default Header;
