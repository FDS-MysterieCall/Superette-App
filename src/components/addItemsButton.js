import React,{Component} from "react"
import { Link } from 'react-router-dom'

export class AddItemButton extends Component {
    render() {
        return(
            <Link to="/createItem"><button id="addItemButton">+</button></Link>
        )
    }
}