import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useRef } from "react";

import Footer from "../components/Footer";
import foto from "../assets/foto-principal.png";
// import Marie from "../assets/marie.jpg";
// import Laila from "../assets/laila.jpg";
// import Cindy from "../assets/cindy.jpg";

import styles from "./Home.module.scss";
import { heroSlider } from "../data";

const Home = () => {
  // const carousel = useRef();
  // const [width, setWidth] = useState(0);
  // const images = [Marie, Laila, Cindy];

  // useEffect(() => {
  //   console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
  //   setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  // }, []);

  return (
    <>
      <Swiper>
        {heroSlider.map((slide, index) => {
          //destructure slide
          const { title, subtitle, image, buttonText } = slide;
          return (
            <SwiperSlide className="py-12 lg:py-16" key={index}>
              <div className="container mx-auto text-center lg:text-left">
                <div className="flex flex-col justify-between ">
                  {/* text*/}
                  <div>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    <button>{buttonText}</button>
                  </div>
                  {/* image */}
                  <div>
                    <img src={image.type} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <section>
        {/* <img
          className={styles["img-home"]}
          src={foto}
          // width={"1080px"}
          alt="Imagem de fundo"
        /> */}
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
        <div className="App"></div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
