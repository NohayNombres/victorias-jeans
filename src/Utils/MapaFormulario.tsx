import { useFormikContext } from 'formik'
import {coordenadaDTO} from './coordenadas.model'
import Mapa from './Mapa'


export default function MapaFormulario(props: mapaFormularioProps) {

    const {values} = useFormikContext<any>();

    function actualizarCampos(coordenadas: coordenadaDTO){

        values[props.campoLat] = coordenadas.lat;
        values[props.campolng] = coordenadas.lng;

    }

    return (
       <Mapa 
            coordenadas={props.coordenadas} 
            manejarClickMapa={actualizarCampos}
        />
    )
}

interface mapaFormularioProps{
    coordenadas: coordenadaDTO[];
    campoLat: string;
    campolng: string;
}

MapaFormulario.defaultProps = {
    coordenadas: []
}