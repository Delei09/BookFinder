import React from 'react'
import Style from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

const Header = ( ) => {

    return (
        <header className = {Style.header} >
            <a href = "#" className = {Style.logo} >
                <FontAwesomeIcon className = "fa-4x" icon = {faBookOpen} />
                <h1>Book Finder</h1>
            </a>
            <div className = {Style.opcao}>
                <a href =  'home' >Home</a>
                <a href = 'pesquisar' >Pesquisar</a>
            </div>
        </header>
    )
}

export default Header