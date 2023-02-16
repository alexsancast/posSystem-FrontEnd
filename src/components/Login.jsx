import React from "react";
import {Form, Button, Container} from "semantic-ui-react";
import {useFormik} from 'formik';
import * as Yup from 'yup'





export const Login = () => {

    const formik = useFormik(
        {
            initialValues:
                {
                    username: '',
                    password: '',

                },

            validationSchema: Yup.object({

                username: Yup.string().min(4,"El usuario esta muy corto").max(10,"El usurio tiene demaciado letras").required('El usuario es requerido'),

                password: Yup.string().min(8,"El password esta muy corto").required('La contaseña es neceraria'),
            }),

            onSubmit: (formData) => {
                console.log(JSON.stringify(formData, null, 2));
            },

        })


    return (

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




