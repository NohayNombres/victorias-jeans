import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../../Utils/Button';
import FormGroupText from './../../Utils/FormGroupText';
import { usuariosCrecioDTO } from './Usuarios.model';

export default function FormularioUsuario(props: propsFormularioUsuario) {
    return (
        <>
        <div className="container">
            <Formik
                initialValues={props.modelo}
                onSubmit={props.onSubmit}
                ValidationSchema = {Yup.object({
                    id: Yup.number().required('Este campo es requerido'),
                    nombre: Yup.string().required('Este campo es requerido'),
                    apellido: Yup.string().required('Este campo es requerido'),
                    telefono: Yup.number().required('Este campo es requerido')
                })}
            >
                {(formikProps)=>(
                     <Form>
                       <FormGroupText campo="nombre" label="Nombre" placeholder="Primer nombre" />
                       <FormGroupText campo="apellido" label="Apeliido" placeholder="Primer apellido" />
                       <FormGroupText campo="id" label="No. de documento" placeholder="Documento de identidad"/>  
                       <div className="form-group">
                            <label htmlFor="correo">Correo electrónico</label>
                            <input type="email"  name="correo" placeholder="Correo"/>
                       </div>
                       <FormGroupText campo="telefono" label="Numero de teléfono" placeholder="Whatsapp/Telegram"/>  
                        <Button 
                        disabled={formikProps.isSubmitting}
                        type="submit">Guardar</Button>
                        <Link className="btn btn-secondary" to="/"> Cancelar </Link>

                     </Form>
    )}

            </Formik>
            </div>
        </>
    )
}

interface propsFormularioUsuario {
    modelo: usuariosCrecioDTO;
    onSubmit(valores: usuariosCrecioDTO, acciones: FormikHelpers<usuariosCrecioDTO>): void;

}
