import React from "react"
import '../style.css';

/*---------------COMPONENT---------------*/
/**/
/*---------------------------------------*/

const CreateItem = () => {
    return (
        <div className='createItemForm'>
            <form>
                <h1>Créer un item</h1>
                <input className="createInput" placeholder="Image de l'item" id="itemIcon" type="file"></input>
                <br></br>
                <input className="createInput" placeholder="Nom de l'item" id="itemName" type="text"></input>
                <br></br>
                <input className="createInput" placeholder="Description de l'item" id="itemDescription" type="text"></input>
                <br></br>
                <input className="createInput" placeholder="Quantité de l'item" id="itemQuantity" type="number"></input>
                <br></br>
                <input type="submit" value="Créer l'item" id="itemValid"></input>
            </form>
        </div>
    );
}

export default CreateItem
