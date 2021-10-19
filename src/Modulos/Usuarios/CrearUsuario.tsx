import React from 'react'
import FormularioUsuario from './FormularioUsuario'

export default function CrearUsuario() {
    return (
        <>
            
             <FormularioUsuario
             modelo= {{nombre: "", apellido: "", id: 0, telefono: 0, correo:""}}
             onSubmit={valores=>console.log(valores)}
             />
                   
        </>
    )
}
