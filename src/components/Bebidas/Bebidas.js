import React from 'react'
import bebidas from './imagenes/bebidas.jpg'
import "./Bebidas.css";
import { Button } from 'react-bootstrap'


const Bebidas = () => {
    return (
        <div className="bebidas">
            <img src={bebidas} alt= " " width="300" height="200"/>
            <div>
            <Button>Bebidas</Button>
            </div>
        </div>
    )
}

export default Bebidas