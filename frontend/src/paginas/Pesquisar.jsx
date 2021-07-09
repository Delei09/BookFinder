import React, { useEffect, useState } from 'react'
import Main from '../components/Main'
import Form from '../components/Form'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import axios from 'axios'
import Style from './Pesquisar.module.css'

const Usuario = ( ) => {

    const [select , setSelect ] = useState("")
    const [input , setInput ] = useState(" ")
    const [pesquisar, setPesquisar] = useState(" ")
    const [livro , setLivro] = useState([])
    const [botao, setBotao] = useState("")
    const [atual , setAtual] = useState(0)

    
    useEffect( () => {
        const ins = input.replace(" ", "")
        if(select === "Titulo"){
            const Url = `https://www.googleapis.com/books/v1/volumes?q=${ins}+intitle&filter=full&startIndex=${atual}`;
             axios.get(Url)
              .then(resp => resp.data)
              .then(dados => dados.items)
              .then(itens => {
                setLivro(itens)
                setBotao('botao')
              })

        }
        if(select === "Autor"){
            const Url = `https://www.googleapis.com/books/v1/volumes?q=${ins}+inauthor&filter=full&startIndex=${atual}`;
            axios.get(Url)
              .then(resp => resp.data)
              .then(dados => dados.items)
              .then(itens => {
                setLivro(itens)
                setBotao('botao')
              })
        }
    },[pesquisar] )

    return (
        <>
            <Header />
            <Main>
                
                <h2>{select}</h2>
                <Form selecionado = {setSelect}  texto = { setInput} submit = {setPesquisar} />
                <div className = {Style.containerCard} >
                    {livro && livro.map( ({volumeInfo}) => {
                            const {title, authors, imageLinks, publishedDate } = volumeInfo
                            const {thumbnail} = imageLinks
                        return(
                            <div key = {title} className = {Style.card}>
                                {thumbnail && <img src = {thumbnail} alt = "imagemLivro" /> }
                                <div className = {Style.titulo}>
                                    <h3> {title} </h3>
                                </div>
                                <h4> {authors} </h4>
                                <h5> {publishedDate} </h5>
                            </div>
                        )

                    } ) }
                    {!livro && <h6>Pesquisa não encontrada...</h6>}
                </div>

            {livro  && botao &&<Button submit = {setPesquisar} at = {atual} pagina = {setAtual}  opcao = {botao} />}

            </Main>
            <Footer/>
        </>
         
    )
}

export default Usuario