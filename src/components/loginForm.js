import React,{Component} from 'react'

export class LoginForm extends Component {
    render() {
        return(
           <div id="loginMenu">
            <form>
                <h1 className="loginTitle">Se connecter</h1>
                <input className='input' placeholder="E-mail" type="email" id="email"></input>
                <br></br>
                <input className='input' placeholder="Mot de passe" type="password" id="password"></input>
                <br></br>
                <input id="valid" value="Se connecter" type="submit"></input>
            </form>
           </div>
        )
    }
}
// document.getElementById("valid").addEventListener("click", loginRequest);
// function loginRequest() {
//     var email = document.getElementById("email").value
//     var password = document.getElementById("password").value

//     if (email === "supermarket@supermarket.com") {
//         if (password === "supermarket ") {
//             document.location.replace('http://localhost:3000/admin');
//         }
//     } else {
//         location.reload();
//     }
// }
