import React from 'react'
import './Hero.css';
import { CgMouse } from "react-icons/cg";

const Hero = () => {
  return (
    <div className='hero-container' id='hero-container'>
      <div className="container">
        <div className="content">
            <p>Bienvenido a mi Ecommerce</p>
            <h1>Descubre lo que necesitas - Siempre a la Moda!</h1>
           <a href="#product-section">
           <button>
            Deslizar <CgMouse />
           </button>
           </a>
        </div>
      </div>
    </div>
  )
}


export default Hero
