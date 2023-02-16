import { useState } from "react";
import {Login} from "./components/Login";
import {useFormik} from "formik";
import * as Yup from "yup";

function handleLogin(event) {
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
        alert('Error al iniciar sesión. Verifique sus credenciales.');
      });
}

//Incializacion con Formik y Validacion con Yup
const formik = useFormik(
    {
        //Inicializamos las campos vacios
        initialValues:
            {
                username: '',
                password: '',

            },

        //Este es sistemas de validacion que usa YUP
        validationSchema: Yup.object({

            username: Yup.string().min(4,"El usuario esta muy corto").max(10,"El usurio tiene demaciado letras").required('El usuario es requerido'),

            password: Yup.string().min(8,"El password esta muy corto").required('La contaseña es neceraria'),
        }),

        //onSubmit para enviar el formulario de Formik
        onSubmit: (formData) => {
            handleLogin(formData)
            console.log(JSON.stringify(formData, null, 2));
        },

    })

function App() {
  // const [count, setCount] = useState(0);

  return(
      <Login />

  )

}

export default App;
