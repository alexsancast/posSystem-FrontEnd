import React from "react";
import "../sass/main.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { TbTableExport } from "react-icons/tb";
import { SlBasketLoaded } from "react-icons/sl";

SlBasketLoaded


const Main = () => {
  return <div className="container__main">

          
         <div className="container__bar-horizontal"><GiHamburgerMenu size="2.5em"/>
         
         
         </div>

      


         <div className="container__bar-vertical">

          <div className="container__username-profile">
             
             <FaUserCircle size="2em"/>
             <p className="main__label-username">Hola Alexander</p>

          </div>

          <div className= "container__main-menu container__menu">
            <TbTableExport size="1.7em"/>
            <p className="main__label-menu">Tablero principal</p>
          </div>

          <div className= "container__caja-menu container__menu">
             <SlBasketLoaded size="1.7em"/>
            <p className="main__label-menu">Caja</p>
          </div>



         </div>
     </div>;
};

export default Main;
