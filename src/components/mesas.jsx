import React, { useState } from "react";
import Mesa from "./boton";




export function Bar() {

    const [mesas, setMesas] = useState(Array(10).fill({ libre: true }));

    function agregarMesa() {

        setMesas([...mesas, { libre: true }]);
    }

    return (


        <div>
            <h1>Bar</h1>
            <p>Número de Mesas: { mesas.length}</p>

            <button onClick={agregarMesa}>Agregar Mesa</button>

            {mesas.map((mesa, index) => (
                // <Mesa key={index} libre={mesa.libre}  />
                <Mesa key={index}  libre={mesa.libre} />


            ))}


        </div>


    );
}