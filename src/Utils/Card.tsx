import React from 'react'
import  './Card.css'
export default function Card(props: cardProps) {
  
    return (

        <div className="card border-none" style={{width:'350px' }}  >
        <img className="card-img-top " src={props.urlFoto} alt="Card" style={{width:'100%',
                                                                              height:'250px'
                                                                                            }}  />
        <div className="card-body border-secondary">
          <h4 className="card-title">{props.titulo}</h4>
          <p className="card-text">{props.descripcion}</p>
  
        </div>
        <div className="card-footer border-secondary">
  
             
            {
            props.stockTallas?      
            props.stockTallas.length>0?
            <h4 className="card-title">Tallas disponibles:</h4>&&
             props.stockTallas.map(talla => 
                    <button key={talla} className="talla">{talla}</button>
                    ) :
                    <div className="alert alert-danger">
                      Producto no disponible
                    </div>
                    :   <div className="alert alert-danger">
                    Tallas no encontradas
                  </div>
            }
        </div>
      </div>  
      
      )
}
 interface cardProps{
    titulo?: string;
    urlFoto?: string;
    descripcion?: string;
    stockTallas?: number[] ; 


 }