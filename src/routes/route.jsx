import React from 'react'
import {Routes, Route } from "react-router-dom";
import {Login} from '../components/Login.jsx';
import {Bar} from '../components/mesas.jsx';



//Declaraciones de rutas 
export default function Rutas() {
  return (
    
    <Routes>
      {/*<Route path="/"  element = {<Login/>} />*/}
      <Route path="/"  element = {<Bar/>} />


    </Routes>
    
  
  )
}


