import React from "react";
import { useState, useEffect, useRef } from "react";
import foto from "../assets/foto-principal.png";
import Footer from "../components/Footer";
import styles from "./Home.module.scss";
import { motion } from "framer-motion";
import Marie from "../assets/marie.jpg";

import Laila from "../assets/laila.jpg";
import Cindy from "../assets/cindy.jpg";

const images = [Marie, Laila, Cindy];

const Home = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <>
      <section>
        <img
          className={styles["img-home"]}
          src={foto}
          width={"1080px"}
          alt="Imagem de fundo"
        />
        <div>
          <h1 className="title">QUER FICAR LINDÃO?</h1>
        </div>
        <div>
          <button className="btn">Agende já seu banho!</button>
        </div>
      </section>
      <section>
        <h1>CUIDAR É A NOSSA ESPECIALIDADE</h1>
        <p>
          Somos especializados em banho e tosa para deixar seu amigo lindão e
          muito cheiroso. Cuidamos com todo amor e carinho para que ele se sinta
          feliz para curtir a vida com você.
        </p>
        <div>
          <p>
            “Eu suspeito de pessoas que não gostam de cachorros, mas confio nos
            cachorros quando eles não gostam de uma pessoa.” -Bill Murray
          </p>
        </div>
      </section>
      <section>
        <h1>NOSSOS ASTROS PETS</h1>
        <div className="App">
          <motion.div
            ref={carousel}
            className="carousel"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              className="inner"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {images.map((image) => (
                <motion.div className="item" key={image}>
                  <img src={image} alt="Texto alt" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
