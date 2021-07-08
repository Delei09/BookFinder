import React, { useState } from 'react'
import Main from '../components/Main'
import Form from '../components/Form'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Usuario = ( ) => {

    const [select , setSelect ] = useState("")
    const [input , setInput ] = useState(" ")
    const [pesquisar, setPesquisar] = useState(" ")

    return (
        <>
            <Header />
            <Main>
                <h2>{select}</h2>
                <Form selecionado = {setSelect}  texto = { setInput} submit = {setPesquisar} />
            </Main>
            <Footer/>
        </>
         
    )
}

export default Usuario