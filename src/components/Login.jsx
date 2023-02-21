import { Formik , useFormik } from "formik";
import React from "react";
import "../sass/login.scss";
import loginSchema from "../schemas/validations";
import { FcHighPriority ,FcOk } from "react-icons/fc";





//Si el usuarios digito bien los datos
const onSubmit = () =>{
  console.log("Submitted!");
}

export const Login = () => {
  //Libreria formik para la validacion de los campos
  const {values ,errors, handleBlur , handleChange , handleSubmit} = useFormik ({
    initialValues:{
      username: "",
      password: ""
    } ,

    validationSchema : loginSchema ,
    onSubmit, 


  })

  console.log(errors);

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form" action="">
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

          <button className="form__submit" type="submit">Entrar</button>
        </div>
        
      </form>
      </div>

   
  );
};
