import { Field } from 'formik'
import React from 'react'

export default function FormGroupCheckBox(props: fromGroupCheckBox) {
    return (
        <div className="form-group form-check">
            <Field className="form-check-input"
                id={props.campo} name={props.campo}
                type="checkbox" />
                <label htmlFor={props.campo}>{props.label}</label>
        </div>
    )
}

interface fromGroupCheckBox {
    label: string;
    campo: string;
}