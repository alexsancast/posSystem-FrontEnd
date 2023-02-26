import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from '../pages/Test';
import Mycomponents from "../pages/Prueba1"


//Declaraciones de rutas 
export default function Rutas() {
  return (
    
    <Routes>
      <Route path="/test"  element = {<Test/>} ></Route>
      <Route path="/prueba1"  element = {<Mycomponents/>} ></Route>
    </Routes>
    
  
  )
}


