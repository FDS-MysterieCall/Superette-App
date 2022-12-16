import React from "react"
import '../style.css';

/*---------------COMPONENT---------------*/
/**/import { Title } from '../components/title';
/**/import { ButtonLogin } from '../components/Buttonlogin';
/**/import { ItemList } from '../components/itemList'
/*---------------------------------------*/

const ClientHome = () => {
    return (
        <div className='clientHome'>
            <div className="App-header">
                <Title/>
                <ButtonLogin/>
            </div>
            <ItemList/>
        </div>
    );
}

export default ClientHome