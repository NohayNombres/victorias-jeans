import React from 'react'
import FormularioUsuario from './FormularioUsuario'

export default function EditarUsuario() {
    return (
        <>
                 <h3>Editar usuario</h3>
             <FormularioUsuario
             modelo= {{nombre: "Cristian", apellido: "Quiroga", id: 1000627733, telefono: 3157425150, correo:"cristiancquiroga380@gmail.com"}}
             onSubmit={valores=>console.log(valores)}
             />
                   
        </>
    )
}
