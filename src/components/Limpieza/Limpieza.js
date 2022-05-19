import React from 'react'
import limpieza from './imagenes/limpieza.jpg'
import './Limpieza.css'
import { Button } from 'react-bootstrap'

const Limpieza = () => {
    return (
    <div>
        <div className="limpieza">
            <img src={limpieza} alt=" " width="300" height="200"/>
            <div>
            <Button>LIMPIEZA</Button>
            </div>
        </div>
    </div>
    )
}

export default Limpieza