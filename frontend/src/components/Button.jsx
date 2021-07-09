import React from 'react'
import Style from './Button.module.css'

const Button = ( {pagina, at, submit}) => {

    const atual = at;

    function proxi(){
        const prox = atual + 10
        pagina(prox) 
        submit(atual)
    }
    function anterior(){
        const ante = atual - 10 
        pagina(ante)
        submit(atual)
    }


    return(
        <div className = {Style.button} >
            <button onClick = {e => anterior(e)} > Anterior </button>
            <button onClick = {e => proxi(e)} > Próximo</button>
        </div>
    )
}

export default Button