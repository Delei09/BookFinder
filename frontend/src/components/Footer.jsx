import React from 'react'
import Style from './Footer.module.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = ( ) => {

    return (
        <footer className = {Style.footer} >
            <h2>Desenvolvido com <FontAwesomeIcon icon = {faHeart}  /> por Vanderlei Lemos</h2>
        </footer>
    )
}

export default Footer