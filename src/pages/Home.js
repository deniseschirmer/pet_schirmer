import React from "react";
import foto from "../assets/foto-principal.png";
// import Home from "../Home.module.scss";

const Home = () => {
  return (
    <>
      <section>
        <img
          className="img-home"
          src={foto}
          width={"1080px"}
          alt="Imagem de fundo"
        />
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
      </section>
    </>
  );
};

export default Home;
