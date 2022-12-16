import React from "react"
import '../style.css';

/*---------------COMPONENT---------------*/
/**/import { Title } from '../components/title';
/**/import { ItemList } from '../components/itemList'
/**/import { AddItemButton } from '../components/addItemsButton'
/*---------------------------------------*/

const AdminHome = () => {
    return (
        <div className='adminHome'>
            <title>Accueil - Admin</title>
            <div className="App-header">
                <Title/>
                <AddItemButton/>
            </div>
            <ItemList/>
        </div>
    );
}

export default AdminHome