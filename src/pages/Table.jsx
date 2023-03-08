import React, { useState } from "react";
import {Mesa} from "../components/button.jsx";





export function Bar() {

    const [mesas, setMesas] = useState(Array(10).fill(0));



    const addTable=()=> {

        setMesas([...mesas, 0 ]);

    }


    return (


        <div>
            <h1>Listado de mesas </h1>
           <p> {mesas.length}</p>
            <button onClick= {addTable}>Agregar Mesa</button>

            {mesas.map((index) =>(


                <Mesa key={index.toString()}>

                    <p>{index} </p>
                </Mesa>

                ))}


        </div>


    );
}