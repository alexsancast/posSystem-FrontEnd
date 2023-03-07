import React, {useState} from "react";


let p = true

export function Mesa() {

    const [buttonColor, setButtonColor] = useState('green');

    const handleClick = () => {

        if (p===true){
            setButtonColor('red')

            p=false
        } else if(p===false){
            p=true
            setButtonColor('green')

        }



    };


    return (

           <div >
            <button  style={{ backgroundColor: buttonColor }} onClick={handleClick}>
                <img  src="src/assets/restaurant.png" alt=""/>
            </button>

        </div>

    );
}







