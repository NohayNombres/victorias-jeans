import CrearUsuario from  "./Modulos/Usuarios/CrearUsuario";
import EditarUsuario from  "./Modulos/Usuarios/EditarUsuario";


import EditarCatalogo from './Modulos/Catalogo/EditarCatalogo';
import MostrarCatalogo from './Modulos/Catalogo/MostrarCatalogo';

import CrearModelo from './Modulos/Catalogo/CrearModelo'
import EditarModelo from './Modulos/Catalogo/EditarModelo'

import EnviarMensaje from './Modulos/Contacto/EnviarMensaje';
import MostrarMensaje from './Modulos/Contacto/MostrarMensaje';

import RedireccionarALanding from "./Utils/RedireccionarALanding";
import LandingPage from "./LandingPage";




const rutas = [

    {path: '/usuario/crear', componente: CrearUsuario},
    {path: '/usuario/editar', componente: EditarUsuario},
    {path: '/catalogo/editar', componente: EditarCatalogo},
    {path: '/modelo/crear', componente: CrearModelo},
    {path: '/modelo/editar', componente: EditarModelo},
    {path: '/catalogo', componente: MostrarCatalogo,  exact: true},

    {path: '/mensaje/enviar', componente: EnviarMensaje},
    {path: '/mensaje/mostrar', componente: MostrarMensaje},

    {path: '/', componente: LandingPage, exact: true },
    {path:'*', componente: RedireccionarALanding}


]


export default rutas;