import { Field, useFormikContext } from 'formik'
import React from 'react'
import ReactMarkDown from 'react-markdown'
import './FormGroupMarkDown.css'

export default function FormGroupMarkDown(props: formGorupMarkDownProps) {

    const { values } = useFormikContext<any>();

    return (
        <div className="form-group form-markdown" >
            <div>
                <label >{props.label}</label>
                <div>
                <Field name={props.campo} as="textarea" className="form-textarea" />
                </div>
                
            </div>
            <div>
                <label >{props.label} (preview):</label>
                <div className="markdown-container">
                    <ReactMarkDown>{values[props.campo]}

                    </ReactMarkDown>
                </div>
            </div>
        </div>
    )
}

interface formGorupMarkDownProps {
    campo: string;
    label: string;

}