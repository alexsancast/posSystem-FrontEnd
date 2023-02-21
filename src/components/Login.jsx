import { Formik , useFormik } from "formik";
import React from "react";
import "../sass/login.scss";
import loginSchema from "../schemas/validations";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { FcHighPriority ,FcOk } from "react-icons/fc";


//Notificacion de error sin las credenciales estan erroneas

const notify = () =>toast.error('🦄 Error al iniciar sesión. Verifique sus credenciales.!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});

//Si el usuarios digito bien los datos

const onSubmit = (event) => {

  event.preventDefault();


   const username = event.target.elements.username.value;
   const password = event.target.elements.password.value;

  axios.post('/api/login', { username, password })
      .then(response => {
        // Almacenar el token de autenticación en el almacenamiento local o de sesión del navegador
        localStorage.setItem('token', response.data.token);


        // Redirigir al usuario a la página principal de la aplicación
        window.location.href = '/';


      })
      .catch(error => {
        // Mostrar un mensaje de error al usuario
          notify()
        // alert('Error al iniciar sesión. Verifique sus credenciales.');
      });


    console.log(username)
    console.log(password)
 }

export const Login = () => {
  //Libreria formik para la validacion de los campos
  const {values ,errors, handleBlur , handleChange , handleSubmit} = useFormik ({
    initialValues:{
      username: "",
      password: ""
    } ,

     validationSchema : loginSchema ,

     onSubmit



  })

    // console.log(errors);

  return (

    <div className="container">
      {/*<form onSubmit={handleSubmit} className="form" action="">*/}
      <form onSubmit={onSubmit} className="form" action="">
          <ToastContainer />
        <h1 className="form__title">Iniciar Sesion</h1>
        <div className="form__container">

          <div className="form__control">


            <input
            className="form__input"
              name="username"
              type="text"
              placeholder=""
              value={values.username}
              onChange={handleChange}
            />
           
         
             <label className="form__label" id="username" htmlFor="">Usuario:</label>
             {/* <FcOk className={errors.username ? "form__input-error " : "form__input-success"} /> */}
             {/* <FcHighPriority className={!errors.username ?  "form__input-icon" : "form__input-error"}/>
            
            { <p className="form__p">{errors.username}</p> } */}
            <span className="form__line"></span>
          </div>

          <div className="form__control">
           
            <input
            className="form__input"
              name="password"
              type="password"
              placeholder=""
              value={values.password}
              onChange={handleChange}
        
            />
       
          
            <label className="form__label" id="password" htmlFor="">Contraseña:</label>
            {/* <FcHighPriority className={!errors.password ?  "form__input-icon2" : "form__input-error2"}/>
            { <p className="form__p">{errors.password}</p> } */}
            <span className="form__line"></span> 
              
          </div>

          <button className="form__submit" type="submit" >Entrar</button>
        </div>
        
      </form>
      </div>

   
  );
};
