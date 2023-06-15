import React from "react";

import styles from "../styles/Footer.module.scss";
// import Logo from "../assets/foto.png";

import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <ul className="footer-navbar">
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/Contato">Contato</a>
          </li>
          <li>
            <a href="#">Termos de uso</a>
          </li>
        </ul>
        <div className="footer-icons">
          <FaFacebookF />
        </div>
        <p>
          © 2023 Todos os direitos reservados. Pet Schirmer CNPJ:
          29.868.469.0001/29
        </p>
      </div>
    </footer>
  );
};

export default Footer;
