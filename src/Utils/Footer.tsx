import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Footer.css';
import  logoInsta from './../Images/logoInsta.svg';
import  logoFacebook from './../Images/logoFacebook.svg';
export default function Footer() {
    return (
        <footer className="main-footer ">
            <div className="container-fluid">
                <div className="row">
             
                       
                       
                 

                        <div className="col">
                            <h5 className="col">Contácto: contacto@victoriasjeans.com   </h5>
                        </div>

                        <div className="col">
                            <h5>  <NavLink className="btn btn-outline-light" to="/PreguntasFrecuentes"> Preguntas frecuentes </NavLink></h5>
                        </div>
                        <div className="col">
                    <a href=""><img src={logoInsta} alt="Logo instagram" style={{width:"50px"}} /></a>
                 
                    </div>

                    <div className="col">
                    <a href=""><img src={logoFacebook} alt="Logo instagram" style={{width:"50px"}} /></a>
                    </div>

                    <div className="row">

                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} Victoria´s jeans | Todos los derechos reservados | <NavLink to="/TYC"> terminos y condiciones</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
