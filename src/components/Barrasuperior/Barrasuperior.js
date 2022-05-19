//import { Switch } from '@material-ui/core';
import React  from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, } from 'react-bootstrap'
//import { BrowserRouter as Router,Switch , Link,  } from "react-router-dom";
//import Ofertas from './Ofertas/Ofertas.js';
//import Contacto  from './Contacto/Contacto.js';
//import Home from "./Home"



//import barra from './components/Barradebusqueda/Barra.js';

export const Barra = () => {
    
    return (

        <div>
         <Navbar bg="dark" variant={"dark"} expand="lg">
  <Navbar.Brand href="#">compara los precios</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mx-auto my-2 my-lg-0 text-center"
      style={{ maxHeight: '100px' }}
      navbarScroll>
      {/* <Nav.Link as={Link} to={'/contacto'}>Contacto</Nav.Link>
      <Nav.Link as={Link} to={'/ofertas'}>Ofertas</Nav.Link> */}
      <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Ayuda</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Sobre nosotros</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#" disabled>
        Link
      </Nav.Link>
      <Nav.Link href="#action1">Crear una cuenta</Nav.Link>
      <Nav.Link href="#action1">Ingresar</Nav.Link>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Buscar</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>



     
)
}
export default Barra

    
