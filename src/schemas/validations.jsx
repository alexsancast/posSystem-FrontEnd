import * as yup from "yup";

// Variables para la contrasena segura
const pssRules = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/';

//Schema para la validacion de los campos
const loginSchema = yup.object().shape({
    username: yup.string()
        .min(6, "El usuario esta muy corto")
        .required("Este campo es requerido"),

      password: yup.string()
        .min(8, "La clave esta muy corta")
        .required("Este campo es requerido"),
});




export default loginSchema

