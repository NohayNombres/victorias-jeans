import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Images/logo-dark.png';
export default function Menu() {
    const claseActiva = 'active';

    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"rgb(10, 33, 74)"}}>
        <div className="container-fluid">
          <a className="navbar-brand"><img src={logo} alt="logo" style={{width:"40%"}} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              
            <NavLink className="nav-link" activeClassName={claseActiva} 
                            to="/catalogo">
                                Catálogo
                            </NavLink>   <NavLink className="nav-link" activeClassName={claseActiva} 
                            to="/usuario/crear">
                                Usuarios
                            </NavLink>
              
            </div>
          </div>
        </div>
      </nav>
    )
}
