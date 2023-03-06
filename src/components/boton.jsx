import React from "react";

function Mesa({ libre }) {
    const estado = libre ? "Libre" : "Ocupada";
    const color = libre ? "green" : "red";

    return (
        <div >
            <button style={{ backgroundColor: color }}> <img  src="src/assets/restaurant.png" alt=""/>   </button>     { estado }

        </div>
    );
}

export default Mesa;