import React from 'react'
import Style from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = ( ) => {

    function clique(e){
        const menu = document.querySelector(`.${Style.link}`)

        if(menu.classList.contains(`${Style.sumir}`)){
            menu.classList.remove(`${Style.sumir}`)
            menu.classList.add(`${Style.aparecer}`)
            
        }else{
            menu.classList.remove(`${Style.aparecer}`)
            menu.classList.add(`${Style.sumir}`)
        }
       

        
    }

    return (
    <   >

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

        <header className = {Style.mob}>
             <div className ={Style.mobile} >
                 <div>
                    <Link to = "/" className = {Style.logoMobile} >
                            <FontAwesomeIcon className = "fa-4x" icon = {faBookOpen} />
                            <h1>Book Finder</h1>
                    </Link>
                    <FontAwesomeIcon onClick = {e => clique(e)} icon = {faAlignJustify} size = "2x" className = {Style.menu} />
                 </div>
                
                <div className = {`${Style.link} , ${Style.sumir}`}>
                    <Link className = ''  to =  '/' >Home</Link>
                    <Link className = '' to = '/pesquisar' >Pesquisar</Link>
                </div>
           </div>
        </header>

        </>
    )
}

export default Header