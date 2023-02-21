import * as yup from "yup";

// Variables para la contrasena segura
const pssRules = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/';

//Schema para la validacion de los campos
const loginSchema = yup.object().shape({
    username: yup.string()
        .min(6, "Caracteres minimo de 6 ")
        .required(""),

      password: yup.string()
        .min(8, "Contrasena minima de 8 ")
        .required(""),
});




export default loginSchema

