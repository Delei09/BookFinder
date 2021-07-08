import React, { useState } from 'react'
import Main from '../components/Main'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Usuario = ( ) => {



    return (
        <>
            <Header />
            <Main>
                <h2>Bem vindo ao Book Finder! </h2>
                <h4>Um app de pesquisa de livros</h4>
            </Main>
            <Footer/>
        </>
         
    )
}

export default Usuario