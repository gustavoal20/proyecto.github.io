import React from 'react'
import higiene from './imagenes/higiene.jpg'
import "./Higiene.css"
import { Button } from 'react-bootstrap'

const Higiene = () => {
    return (
        <div className="higiene">
           <img src={higiene} alt=" " width="300" height="200"/> 
           <div>
            <Button>HIGIENE</Button>
            </div>
        </div>
    )
}

export default Higiene