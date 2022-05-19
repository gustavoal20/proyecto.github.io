import React from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Almacen from './components/Almacen/Almacen';
import Bebidas from './components/Bebidas/Bebidas';
import Carne from './components/Carne/Carne';
import Higiene from './components/Higiene/Higiene';
import Limpieza from './components/Limpieza/Limpieza';
import Verduras from './components/Verduras/Verduras';
import './components/Card.css';
import Barrasuperior from './components/Barrasuperior/Barrasuperior'
import Contacto from './components/Contacto/Contacto'
import  Ofertas  from './components/Ofertas/Ofertas';
//import Home from './components/Barradebusqueda/Home'


function App() {
  return (
  <div>
    <div className="barra">
      <Barrasuperior/>
      <Ofertas/>
      <Contacto/>
    </div>
    <br/>
    <br/>
    <div className="card">
     <Almacen/>
     <Bebidas/>
     <Carne/>
     <Higiene/>
     <Limpieza/>
     <Verduras/>
    </div>
  </div>
  );
}

export default App;

//---------------------------------
// import './App.css';
// import PublicRoutes from './routes/public.routes';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <PublicRoutes/>
       
//       </header>
//     </div>
//   );
// }

// export default App;