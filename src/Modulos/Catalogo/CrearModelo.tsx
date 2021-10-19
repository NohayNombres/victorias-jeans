import React from 'react'
import FormularioModelo from './FormularioModelo'

export default function CrearModelo() {
    return (
        <>
            <h3>Crear modelo</h3>
            <FormularioModelo 
            modelo={{
                id: 0,
                referencia:'',
                descripcion:'',
                stockTallas:[] 
            }}
            onSubmit={valores => console.log(valores)}

            />

        </>
    )
}
