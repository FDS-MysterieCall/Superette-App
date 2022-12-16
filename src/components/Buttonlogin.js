import React,{Component} from "react"
import { Link } from 'react-router-dom'

export class ButtonLogin extends Component {
    render() {
        return(
            <Link to="/login"><button id="loginButton">Connexion</button></Link>
        )
    }
}