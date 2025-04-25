import React from 'react'
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div id="footer" className="footer">
                <div className="footer-content">
                    <div className="footer-content-left">
                        <Link to={'/'}>
                            <img src="https://i.ibb.co/B5vSxKJ1/Forlino-1-1.png" alt="" style={{ width: "12vmax", marginBottom: "10px" }} />
                        </Link>
                        <p>Esta pagina fue diseñada por Lucas Forlino como muestra de un ecommerce avanzado para proyectos FullStack</p>
                        <div className="footer-social-icon">
                            <FaLinkedin />
                            <FaInstagramSquare />
                            <FaSquareWhatsapp />
                        </div>
                    </div>
                    <div className="footer-content-center">
                        <h2>EMPRESA</h2>
                        <ul>
                            <li>Inicio</li>
                            <li>Sobre nosotros</li>
                            <li>Envios</li>
                            <li>Politica de privacidad</li>
                        </ul>
                    </div>
                    <div className="footer-content-right">
                        <h2>CONTACTANOS</h2>
                        <ul>
                            <li>+541162756353</li>
                            <li>Lucasforlino2001@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className="divider"></div>
                <p className="footer-copyright">Copyright 2025 @Lucas Forlino</p>
            </div>
        </>
    )
}

export default Footer
