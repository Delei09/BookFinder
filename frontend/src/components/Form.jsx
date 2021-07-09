import React, { useState } from 'react'
import Style from './Form.module.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch } from '@fortawesome/free-solid-svg-icons'


const Form = ( {selecionado, texto, submit} ) => {

    const [input, setInput] = useState("")
    const [select, setSelect] = useState("")
    const [botao, setBotao] = useState(1)
    const [mensagem, setMensagem] = useState("")

    function handleInput(e){
        const {value} = e.target
        setInput(value)
        texto(value)
    }

    function handleSelect(e){
        const {value} = e.target
        setSelect(value)
        selecionado(value)
    }

    function pesquisar(e){
        e.preventDefault()
        if(input !== "" && select !== ""){
            setBotao(botao + 1)
            submit(botao)
            setMensagem("")
        }else{
            setMensagem("Preencha o formulário*")
        }
        
    }
    return (
        <>
        <form className = {Style.form} onSubmit = {e => pesquisar(e)} >
            <div>
                <select  value = {select} onChange = {e => handleSelect(e)} >
                    <option disabled value = "" >Selecione</option>
                    <option value = "Titulo" > Titulo</option>
                    <option value = "Autor" > Autor</option>
                </select>
            </div>
            <div className = {Style.input}>
                <input type = 'text' placeholder = 'Digite...' value = {input}  onChange = {e => handleInput(e)}   />
                <button className = {Style.logo} >
                     <FontAwesomeIcon icon = {faSearch} className = 'fa-2x' />
                </button>
            </div>
           
        </form> 
        <h4 className = {Style.h4}> {mensagem && mensagem} </h4>
    
    </>
    )
}

export default Form