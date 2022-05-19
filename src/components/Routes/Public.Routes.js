import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import HomeView from '../views/HomeViews';
import PublicRoute from './helperRoutes';
//import ActividadesViews from '../views/ActividadesViews';
import ContactoViews from '../views/ContactoViews';
import ProducAlmacenViews from '../Views/ProducAlmacenViews';


const PublicRoutes = () => {
    return (
        <Switch>
            <PublicRoute exac path='/producalmacen' componen={ProducAlmacenViews}/>
            <PublicRoute exac path='/Contacto' componen={ContactoViews}/>
            <PublicRoute exac path='/Actividades' componen={ActividadesViews}/>
            <PublicRoute exac path='/login' componen={LoginView} />
            <PublicRoute exac path="/" componen={HomeView}/>
            <Redirect path='/**' to='/'/>
           
        </Switch>
    )
}

export default PublicRoutes;