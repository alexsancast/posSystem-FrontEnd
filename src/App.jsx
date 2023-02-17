
import {Login} from "./components/Login";
import { Form, Button, Container } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";




function App() {

  //Codigo para inicar sesion 
  function handleLogin(data) {
    console.log("Usename: " + data.username + " Password: " + data.password);
  }
  
  //Validacion de campos
  const formik = useFormik({
    //Inicializamos las campos vacios
    initialValues: {
      username: "",
      password: "",
    },

    //Este es sistemas de validacion que usa YUP
    validationSchema: Yup.object({
      username: Yup.string()
        .min(6, "El usuario esta muy corto")
        .max(10, "El usurio tiene demaciado letras")
        .required("El usuario es requerido"),

      password: Yup.string()
        .min(8, "El password esta muy corto")
        .required("La contaseña es neceraria"),
    }),

    //onSubmit para enviar el formulario de Formik
    onSubmit: (formData) => {
      handleLogin(formData);
      // console.log(JSON.stringify(formData, null, 2));
    },
  });



  return(
      <Login formik = {formik} />

  )

}

export default App;
