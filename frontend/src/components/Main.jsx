import React from 'react'
import Style from './Main.module.css'

const Main = ( props ) => {


    return (
        <main className = {Style.main} >
            {props.children}
        </main>
    )
}

export default Main