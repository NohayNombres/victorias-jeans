
export interface modeloCreacionDTO{
    id: number;
    descripcion: string;
    referencia: string;
    stockTallas: number[];
    urlFoto?: string;
    foto?: File; 
    

}

export interface modeloCatalogoDTO{
    referencia: string 
 

}