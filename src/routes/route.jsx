import React from 'react'
import {Routes, Route } from "react-router-dom";
import {Login} from '../pages/Login';



//Declaraciones de rutas 
export default function Rutas() {
  return (
    
    <Routes>
      <Route path="/"  element = {<Login/>} />


    </Routes>
    
  
  )
}


