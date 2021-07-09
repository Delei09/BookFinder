import React from 'react'
import Style from './Button.module.css'

const Button = ( ) => {

    return(
        <div className = {Style.button} >
            <button> Anterior </button>
            <button> Próximo</button>
        </div>
    )
}

export default Button