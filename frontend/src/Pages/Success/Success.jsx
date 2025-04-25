import React from 'react'
import { BsCheckCircleFill } from "react-icons/bs";
import "./Success.css";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Success = () => {
    return (
        <>
            <div className="orderSuccess">
                <div>
                    <BsCheckCircleFill style={{ fontSize: "60px", color: "#240750" }} className='cir'/>
                </div>
                <Typography>Tu pedido fue hecho con exito </Typography>
                <Link to="/orders">Ver pedidos</Link>
            </div>
        </>
    );
}

export default Success
