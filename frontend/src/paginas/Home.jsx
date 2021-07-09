import React from 'react'
import Main from '../components/Main'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Usuario = ( ) => {



    return (
        <>
            <Header />
            <Main>
                <h2>Bem vindo ao Book Finder! </h2>
                <h4>Um app de pesquisa de livros</h4>
                <Link className = '' to = '/pesquisar' >Pesquisar Livros</Link>
            </Main>
            <Footer/>
        </>
         
    )
}

export default Usuario