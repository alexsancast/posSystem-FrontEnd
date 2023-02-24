import React from 'react';
import {BrowserRouter,Routes,Route} from"react-router-dom";
import {prueba1,prueba2} from "../routes/route.jsx";





const Prueba = () => {
    return (
        <div>
            <h1> WEO</h1>

<BrowserRouter>

    <Routes>

        <Route path="/prueba1" element={prueba1}/>
        <Route path="/prueba2" element={prueba2}/>

    </Routes>


</BrowserRouter>


        </div>
    );
};

export default Prueba;
