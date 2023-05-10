import React from "react";
// import Logo from "../assets/foto.png";

import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="">
        <ul>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#">Termos de uso</a>
          </li>
        </ul>
        <div className="footer-icons">
          <FaFacebookF />
        </div>
      </div>
      <p>
        © 2023 Todos os direitos reservados. Pet Schirmer CNPJ:
        29.868.469.0001/29
      </p>
    </footer>
  );
};

export default Footer;
