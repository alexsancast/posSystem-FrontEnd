import { Formik , useFormik } from "formik";
import React from "react";
import "../sass/login.scss";
import loginSchema from "../schemas/validations";


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
        <h1>Entrar</h1>

        <div className="form-container">
          <div className="form-control">
            <label id="username" htmlFor=""></label>
            <input
              name="username"
              type="text"
              value={values.username}
              onChange={handleChange}
 
            />
            { <p>{errors.username}</p> }
          </div>

          <div className="form-control">
            <label id="password" htmlFor=""></label>
            <input
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
        
            />
             { <p>{errors.password}</p> }
          </div>

          <button type="submit">Entrar</button>
        </div>
      </form>
      </div>

   
  );
};
