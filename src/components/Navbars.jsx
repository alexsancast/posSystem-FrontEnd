import React, { useState, useTransition } from "react";
import "../sass/navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiTableAltFill } from "react-icons/ri";
import { FaMoneyBill, FaUserCog } from "react-icons/fa";
import { RiInboxFill } from "react-icons/ri";
import { FaBoxes, FaUserEdit, FaUserCircle, FaTools , FaUsersCog ,FaIdCardAlt } from "react-icons/fa";
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
  // const [state, setState] = useState(false);
  // const dropdownMenu = () => setState((prevent) => !prevent); // Funcion para establecer el valor en true / false

  return (
    <nav className="container__nav-vertical">
      <div className="container__username-profile">
        <FaUserCircle className="main__icon" size="2em" />
        <p className="main__label-username">Hola Alexander</p>
      </div>

      <ul className="ul">
        <li className="container__li-table ">
          <a href="/" className="container__a">
            <RiTableAltFill className="main__icon" size="1.7em" />
            <p className="main__label-menu">Tablero principal</p>
          </a>
        </li>

        <li className="container__li-caja ">
          <a href="" className="container__a">
            <FaMoneyBill className="main__icon" size="1.7em" />
            <p className="main__label-menu">Caja</p>
          </a>
        </li>

        <li className="container__li-products ">
          <a href="" className="container__a">
            <RiInboxFill className="main__icon" size="1.7em" />
            <p className="main__label-menu">Productos</p>
          </a>
        </li>

        <li className="container__li-products ">
          <a href="" className="container__a">
            <FaUserEdit className="main__icon" size="1.7em" />
            <p className="main__label-menu">Clientes</p>
          </a>
        </li>

        <li className="container__li-reports ">
          <a href="" className="container__a">
            <FaIdCardAlt className="main__icon" size="1.7em" />
            <p className="main__label-menu">Proveedores</p>
          </a>
        </li>

        <li className="container__li-users ">
          <a href="" className="container__a">
            <FaUsersCog className="main__icon" size="1.7em" />
            <p className="main__label-menu">Usuarios & Roles</p>
          </a>
        </li>

        <li className="container__li-reports ">
          <a href="" className="container__a">
            <HiDocumentReport className="main__icon" size="1.7em" />
            <p className="main__label-menu">Reportes</p>
          </a>
        </li>

        <li className="container__li-tools ">
          <a href="" className="container__a">
            <FaTools className="main__icon" size="1.7em" />
            <p className="main__label-menu">Configuraciones</p>
          </a>
        </li>

        <li className="container__li-exit ">
          <a href="" className="container__a-exit">
            <IoMdExit className="main__icon" size="1.7em" />
            <p className="main__label-menu">Salir</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { Navbarhorizontal, Navbarvertical };
