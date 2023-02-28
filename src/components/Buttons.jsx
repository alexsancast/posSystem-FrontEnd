import React  from "react";
import "../sass/buttons.scss";

const Button = ({label , color}) => {
    

    return ( 
        <button className={color ? "btn-green" : "btn-red"}>{label}</button>
    )

}

const ButtonM = ({label ,color}) => {
    return ( 
        <button className={color ? "btn-green-m" : "btn-red-m"}>{label}</button>
    )

}

const ButtonS = ({label , color}) => {
    return ( 
        <button className={color ? "btn-green-s" : "btn-red-s"}>{label}</button>
    )


}

export {Button , ButtonM , ButtonS}






