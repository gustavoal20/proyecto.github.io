//import { Card } from '@material-ui/core';
import React from 'react';
//import * as ReactBootstrap from 'react-bootstrap'
//import 'bootstrap/dist/css/bootstrap.min.css';
import almacen from './imagenes/almacen.jpg';
import {Button} from 'react-bootstrap'
import "./Almacen.css"



const Almacen = () => {

    return (
        <div className="almacen">
            
            <img src={almacen} alt= " " width="300" height="200" />
            <div>
            <Button><a href='/producalmacen'>Almacen</a></Button>
            </div>
           
        </div>
        
    
    )
}

export default Almacen