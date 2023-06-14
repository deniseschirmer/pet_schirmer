import React from "react";

import { useState, useEffect, useRef } from "react";

import Footer from "../components/Footer";
import foto from "../assets/foto-principal.png";
// import Marie from "../assets/marie.jpg";
// import Laila from "../assets/laila.jpg";
// import Cindy from "../assets/cindy.jpg";

import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <>
      <section>
        <div className={styles["img-container"]}>
          <img
            className={styles["img-home"]}
            src={foto}
            alt="Imagem de fundo"
          />
          <div className={styles["text-container"]}>
            <h1 className="">
              Quer ficar <br />
              Lindão?
            </h1>
            <button className="">Agende já seu banho!</button>
          </div>
        </div>
      </section>

      <section>
        <h2>Sobre nós</h2>
        <h3>Cuidamos do seu amiguinho com muito carinho!</h3>
        <p>
          Com mais de 12 anos de experiência, cuidamos do seu pet com carinho e
          dedicação, oferecendo uma variedade de produtos e serviços de
          qualidade. Nossa loja é um ambiente seguro, onde você pode se sentir
          tranquilo ao trazer seu amiguinho de estimação. Conte conosco para
          cuidar do seu pet e proporcionar uma experiência confiável e
          satisfatória.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default Home;
