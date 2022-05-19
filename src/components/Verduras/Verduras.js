import React from 'react'
import verduras from './imagenes/verduras.jpg'
import "./Verduras.css"
import { Button } from 'react-bootstrap'


const Verduras = () => {
    return (
        <div className="verduras">
            <img src={verduras} alt=" " width="300" height="200"/>
            <div>
            <Button>VERDURAS</Button>
            </div>
        </div>
    )
}

export default Verduras