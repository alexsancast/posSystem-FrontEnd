import React from 'react'
import {Routes, Route } from "react-router-dom";
import {Login} from '../pages/Login.jsx';
import {Bar} from '../pages/Table.jsx';



//Declaraciones de rutas 
export default function Rutas() {
  return (
    
    <Routes>
      {/*<Route path="/"  element = {<Login/>} />*/}
      <Route path="/"  element = {<Bar/>} />


    </Routes>
    
  
  )
}


