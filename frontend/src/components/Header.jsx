import React from 'react'
import Style from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = ( ) => {

    return (
        <header className = {Style.header} >
            <Link to = "/" className = {Style.logo} >
                <FontAwesomeIcon className = "fa-4x" icon = {faBookOpen} />
                <h1>Book Finder</h1>
           </Link>
            <div className = {Style.opcao}>
                <Link to =  '/' >Home</Link>
                <Link to = 'pesquisar' >Pesquisar</Link>
            </div>
        </header>
    )
}

export default Header