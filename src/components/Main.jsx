import React from "react";
import "../sass/main.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiTableAltFill } from "react-icons/ri";
import { FaMoneyBill , FaUserCog } from "react-icons/fa";
import { RiInboxFill } from "react-icons/ri";
import { FaBoxes , FaUserEdit,FaUserCircle , FaTools} from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { IoMdExit } from "react-icons/io";

const Main = () => {
  return <div className="container__main">



          
         <div className="container__bar-horizontal">
            <GiHamburgerMenu className="main__icon   " size="2.5em"/>
            <h1 className="title__homepage">Bienvenidos a Dragon Lite</h1>
         
         </div> 

        

           
  
      
          
         <div className="container__bar-vertical">

          <div className="container__username-profile">
             
             <FaUserCircle className="main__icon" size="2em"/>
             <p className="main__label-username">Hola Alexander</p>

          </div>

          <div className= "container__main-menu container__menu">
            <RiTableAltFill className="main__icon" size="1.7em"/>
            <p className="main__label-menu">Tablero principal</p>
          </div>

          <div className= "container__menu-caja container__menu">
             <FaMoneyBill className="main__icon" size="1.7em"/>
            <p className="main__label-menu">Caja</p>
          </div>

          <div className= "container__menu-products container__menu">
             <RiInboxFill className="main__icon" size="1.7em"/>
            <p className="main__label-menu">Productos</p>
          </div>

          <div className= "container__menu-shopping container__menu">
             <FaBoxes className="main__icon" size="1.7em"/>
            <p className="main__label-menu">Compras</p>
          </div>

          <div className= "container__menu-products container__menu">
             <FaUserEdit className="main__icon" size="1.7em"/>
            <p className="main__label-menu">Contactos</p>
          </div>

          <div className= "container__menu-reports container__menu">
             <HiDocumentReport className="main__icon" size="1.7em"/>
            <p className="main__label-menu">Reportes</p>
          </div>

          <div className= "container__menu-users container__menu">
             <FaUserCog className="main__icon" size="1.7em"/>
            <p className="main__label-menu">Usuarios & Roles</p>
          </div>

          <div className= "container__menu-tools container__menu">
             <FaTools className="main__icon" size="1.7em"/>
            <p className="main__label-menu">Configuraciones</p>
          </div>

          <div className= "container__menu-exit container__menu-exit">
             <IoMdExit className="main__icon" size="1.7em"/>
            <p className="main__label-menu">Salir</p>
          </div>

          





         </div>
     </div>;
};

export default Main;
