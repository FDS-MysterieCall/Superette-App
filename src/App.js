import './style.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
/*---------------COMPONENT---------------*/
import ClientHome from './pages/clientHome';
import LoginMenu from './pages/loginPage';
import AdminHome from './pages/adminHome'
import CreateItem from './pages/createItemPage'
/*---------------------------------------*/

function App() {
  return (
    <div className="container">
       <BrowserRouter>
       <Routes>
          <Route path="/" element={<ClientHome/>}/>
          <Route path="/login" element={<LoginMenu/>}/>
          <Route path="/admin" element={<AdminHome/>}/>
          <Route path="/createItem" element={<CreateItem/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
