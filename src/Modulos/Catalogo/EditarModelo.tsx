import React from 'react'
import FormularioModelo from './FormularioModelo';

export default function EditarModelo() {


    return (
        <>
          <FormularioModelo 
          modelo={{id: 1, referencia:'Industrial pretina ancha', descripcion:'',stockTallas: [4, 6, 8, 10, 12],  urlFoto:'https://usamedia.frenchconnection.com/ms/fcus/74naf-womens-fu-midvintage-reem-denim-high-waisted-culottes-3.jpg?404=fcus/74naf.jpg&width=425&height=637'}}
          onSubmit={valores =>  console.log(valores)}
            
          />
        </>
    )
}
