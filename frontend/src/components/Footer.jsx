import React from 'react'
import Style from './Footer.module.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer = ( ) => {

    return (
        <footer className = {Style.footer} >
            <h2>Book Finder <FontAwesomeIcon icon = {faHeart}  /> </h2>
        </footer>
    )
}

export default Footer