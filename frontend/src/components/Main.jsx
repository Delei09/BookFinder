import React, { useState } from 'react'
import Style from './Main.module.css'
import Form from './Form'
import { checkPropTypes } from 'prop-types'

const Main = ( props ) => {


    return (
        <main className = {Style.main} >
            {props.children}
        </main>
    )
}

export default Main