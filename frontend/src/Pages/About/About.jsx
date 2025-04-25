import React, { useEffect } from 'react';
import './About.css';
import { IoMdMailUnread } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
  return (
    <div className="about-container">
      <div className="profile-photo">
        <img src="1705388450800.jpg" alt="Profile" />
      </div>
      <div className="description">
        <h1>Sobre Nosotros</h1>
        <p>
          Bienvenido a nuestro comercio! Nos dedicamos a ofrecer los mejores productos
          y servicios a nuestros clientes. Nuestra misión es ofrecer artículos de alta calidad
          a precios competitivos. ¡Gracias por comprar con nosotros!
        </p>
      </div>
      <div className="social-links">
        <a href="lucasforlino2001@gmail.com" target="_blank" rel="noopener noreferrer">
          <IoMdMailUnread />
        </a>
        <a href="https://www.instagram.com/lucasforlino/" target="_blank" rel="noopener noreferrer">
          <FaSquareInstagram />
        </a>
        <a href="https://www.linkedin.com/in/lucasforlino/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin/>
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
