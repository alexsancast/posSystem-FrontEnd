import React, { useState } from "react";
import {Mesa} from "./boton";





export function Bar() {

    const [mesas, setMesas] = useState(Array(10).fill({ tables: true }));


    const agregarMesa=()=> {

        setMesas([...mesas, { table: true }]);

    }

    return (


        <div>
            <h1>Listado de mesas </h1>

            <button onClick={agregarMesa}>Agregar Mesa</button>

            {mesas.map((mesa, index) => (

                <Mesa key={index}/>


            ))}


        </div>


    );
}