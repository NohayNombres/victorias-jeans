import { url } from 'inspector'
import React from 'react'
import { array } from 'yup/lib/locale'
import Card from '../../Utils/Card'

export default function MostrarCatalogo(props: mostrarCatalogoProps) {
    const modelos = [
        { id: 1, referencia: 'ochentero', descripcion: 'Pantalon estilo ochentero con bota ancha y pretina alta', stockTallas: [6, 8, 10, 12], urlFoto: 'https://http2.mlstatic.com/D_NQ_NP_620203-MCO46251813296_062021-O.jpg' },
        { id: 2, referencia: 'mom jean', descripcion: 'Cómodo para usar todos los dias', stockTallas: [6, 10, 12, 14], urlFoto: 'https://images-na.ssl-images-amazon.com/images/I/41b8RCcjyJL._SX500_SY500_CR,0,0,500,500_.jpg' },
        { id: 3, referencia: 'clasico', descripcion: 'clásico jeje', stockTallas: [], urlFoto: 'https://http2.mlstatic.com/D_NQ_NP_758534-MCO42807507402_072020-O.jpg' }]


    return (
        <div className="container d-flex justify-content-center align-items-center h-100 mt-5">
            
                {modelos.map(modelo =>
                    <div
                        className="col md-4"
                        key={modelo.id}
                    >
                        <Card

                            titulo={modelo.referencia}
                            descripcion={modelo.descripcion}
                            stockTallas={modelo.stockTallas}
                            urlFoto={modelo.urlFoto}

                        />
                    </div>)}
           
        </div>
    )
}


interface mostrarCatalogoProps {


}