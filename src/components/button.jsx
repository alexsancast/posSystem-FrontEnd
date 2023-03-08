import React, {useState} from "react";




export function Mesa() {
    let isBusy = true

    const [buttonColor, setButtonColor] = useState('green');

    const handleClick = () => {

        if (isBusy===true){
            setButtonColor('red')


            isBusy=false
        } else if(isBusy===false){
            isBusy=true
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







