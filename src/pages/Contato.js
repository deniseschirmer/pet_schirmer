// import { useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contato = () => {
  const form = useRef();

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass("text-animate-hover");
  //   }, 3000);
  // }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_le5foa1",
        "template_9fwisnj",
        form.current,
        "kZw17p1lmPyEjUfqJ"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <p>Contato</p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Pet Schirmer,
          <br />
          Novo Mundo, Curitiba/PR
          <br />
          <br />
          Brasil <br />
          <br />
          <span>petschirmer@hotmail.com</span>
        </div>
        <div className="map-wrap">
          {/* <MapContainer center={[-25.5119069, -49.2973531, 13]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-25.5119069, -49.2973531, 13]}>
              <Popup>Denise lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer> */}
        </div>
      </div>
    </>
  );
};

export default Contato;
