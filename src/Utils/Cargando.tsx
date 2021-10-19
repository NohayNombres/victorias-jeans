import React from 'react'
import css from './Cargando.module.css'

export default function Cargando() {
    return (
        <>
            <div className={css.div}>
                <img src="https://lacafeoriginal.com/wp-content/uploads/2020/06/preloader-form.gif" alt="loadingGif" />
            </div>
        </>
    )
}
