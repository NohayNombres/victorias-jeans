import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import { modeloCreacionDTO } from './modelo.model'
import FormGroupText from '../../Utils/FormGroupText'
import FormGroupImagen from '../../Utils/FormGroupImagen'
import Button from '../../Utils/Button'
import { Link } from 'react-router-dom'


export default function FormularioModelo(props: formularioModeloProps) {




    return (
        <>
            <Formik
                initialValues={props.modelo}
                onSubmit={props.onSubmit}
            >

                {(formikProps) => (
                    <Form>
                        <FormGroupText
                            campo="referencia"
                            label="Referencia"
                        />
                        <FormGroupImagen
                            label="Foto"
                            campo="foto"
                            imagenURL={props.modelo.urlFoto}                                                       
                        />
{console.log("Foto:"+ props.modelo.urlFoto)}
                        <Button 
                            type="submit"
                        >Guardar</Button>
                        <Link className="btn btn-secondary" to="/" >Cancelar</Link>


                    </Form>
                )}

            </Formik>
        </>
    )
}

interface formularioModeloProps {
    modelo: modeloCreacionDTO;
    onSubmit(valores: modeloCreacionDTO, acciones: FormikHelpers<modeloCreacionDTO>): void;
}