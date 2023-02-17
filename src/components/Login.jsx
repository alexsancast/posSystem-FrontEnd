import React from "react";
import {Form, Button, Container} from "semantic-ui-react";
import {useFormik} from 'formik';
import * as Yup from 'yup'


function handleLogin(data){

    console.log("Usename: " + data.username +  " Password: " + data.password)


}

export const Login = () => {


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
                // console.log(JSON.stringify(formData, null, 2));
            },

        })


    return (

        //renderizado con semantic-ui-react
        //Este contenedor es para renderizar los componentes del Login
        <Container>

            <h1>L O G I N</h1>

            <Form style={{width: '30%'}} onSubmit={formik.handleSubmit}>
                <Form.Input
                    type='text'
                    icon="user"
                    iconPosition="left"
                    placeholder='Fmartinez'
                    name='username'
                    onChange={formik.handleChange}
                    error={formik.errors.username}
                />
                <Form.Input
                    type='password'
                    icon="lock"
                    iconPosition="left"
                    placeholder='**********'
                    name='password'
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                />


                <Button type='submit'> Entrar </Button>
            </Form>


        </Container>
    );
}




