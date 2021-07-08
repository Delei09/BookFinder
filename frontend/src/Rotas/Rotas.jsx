import React from 'react'
import Home from "../paginas/Home"
import Pesquisar from '../paginas/Pesquisar'
import { Redirect, Route , Switch} from 'react-router-dom'

const Rotas = () => {
    return(
        <Switch>
            <Route exact  path = '/'>
                <Home />
            </Route>
            <Route  path = '/pesquisar'>
                <Pesquisar />
            </Route>
        </Switch>
    )
}

export default Rotas