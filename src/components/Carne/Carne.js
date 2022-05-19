import React from 'react'
import { Button } from 'react-bootstrap'
import carne from './imagenes/carne.jpg'
import "./Carne.css" 


const Carne = () => {
    return (
        <div className="carne">
            <img src={carne} alt= " " width="300" height="200"/>
            <div>
            <Button>Carne</Button>
            </div>
        </div>
    )
}

export default Carne