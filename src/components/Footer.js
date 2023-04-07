import React from "react";
// import Logo from "../assets/foto.png";

import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="">
        <div className="">{/* <img src={Logo} alt="" /> */}</div>
        <div className="footer-icons">
          <FaFacebookF />
        </div>
      </div>
      <p>@2021 Pet Schirmer CNPJ: 29.868.469.0001/29</p>
    </footer>
  );
};

export default Footer;
