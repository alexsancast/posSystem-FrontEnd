import React from "react";
import "../sass/main.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

const Main = () => {
  return <div className="container__main">
         <div className="container__bar-horizontal"><GiHamburgerMenu size="2.5em"/>
         
         
         </div>


         <div className="container__bar-vertical">

          <div className="container__username-profile">
             
             <FaUserCircle size="2em"/>
             <p className="username__name">Hola Alexander</p>

          </div>



         </div>
     </div>;
};

export default Main;
