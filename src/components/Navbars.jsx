import React, { useState, useTransition } from "react";
import "../sass/navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiTableAltFill } from "react-icons/ri";
import { FaMoneyBill, FaUserCog } from "react-icons/fa";
import { RiInboxFill } from "react-icons/ri";
import { FaBoxes, FaUserEdit, FaUserCircle, FaTools } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { IoMdExit } from "react-icons/io";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Navbarhorizontal = () => {
  return (
    <nav className="container__nav-horizontal">
      <GiHamburgerMenu className="main__icon   " size="2.5em" />
      <h1 className="title__homepage">Bienvenidos a Dragon Lite</h1>
    </nav>
  );
};

const Navbarvertical = () => {
  const [state, setState] = useState(false);
  const dropdownMenu = () => setState((prevent) => !prevent); // Funcion para establecer el valor en true / false

  return (
    <nav className="container__nav-vertical">
      <div className="container__username-profile">
        <FaUserCircle className="main__icon" size="2em" />
        <p className="main__label-username">Hola Alexander</p>
      </div>

      <ul className="ul">
        <li className="container__li-menu container__li">
          <RiTableAltFill className="main__icon" size="1.7em" />
          <p className="main__label-menu">Tablero principal</p>
        </li>

        <li className="container__li-caja container__li">
          <FaMoneyBill className="main__icon" size="1.7em" />
          <p className="main__label-menu">Caja</p>
        </li>

        <li className="container__li-products container__li">
          <RiInboxFill className="main__icon" size="1.7em" />
          <p className="main__label-menu">Productos</p>
        </li>

        <li className="container__li-shopping container__li">
          <FaBoxes className="main__icon" size="1.7em" />
          <p className="main__label-menu">Compras</p>
        </li>

        <li className="container__li-products container__li-sub" >
          <div className="container__icon-label" onClick={dropdownMenu} >
            <FaUserEdit className="main__icon" size="1.7em" />
            <a  href="#" className="main__label-menu">
              Contactos
            </a>
            <MdOutlineKeyboardArrowLeft
              className="main__icon-arrows"
              size="1.7em"
            />
          </div>

          <div className={state ? "dropdown__content" : "dropdown__content-none"} >
            <ul className="dropdown__ul">
              <li className="dropdown__li">Clientes</li>
              <li className="dropdown__li">Proveedor</li>
            </ul>
          </div>
        </li>

        <li className="container__li-reports container__li">
          <HiDocumentReport className="main__icon" size="1.7em" />
          <p className="main__label-menu">Reportes</p>
        </li>

        <li className="container__li-users container__li">
          <FaUserCog className="main__icon" size="1.7em" />
          <p className="main__label-menu">Usuarios & Roles</p>
        </li>

        <li className="container__li-tools container__li">
          <FaTools className="main__icon" size="1.7em" />
          <p className="main__label-menu">Configuraciones</p>
        </li>

        <li className="container__li-exit container__li-exit">
          <IoMdExit className="main__icon" size="1.7em" />
          <p className="main__label-menu">Salir</p>
        </li>
      </ul>
    </nav>
  );
};

export { Navbarhorizontal, Navbarvertical };
