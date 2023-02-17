import React from "react";
import { Form, Button, Container } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";



export const Login = ({formik}) => {
  //Incializacion con Formik y Validacion con Yup



  return (
    //renderizado con semantic-ui-react
    //Este contenedor es para renderizar los componentes del Login

    <Container>
      <h1>Login</h1>

      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          placeholder="Fmartinez"
          name="username"
          onChange={formik.handleChange}
          error={formik.errors.username}
          
        />
        <Form.Input
          type="password"
          placeholder="**********"
          name="password"
          onChange={formik.handleChange}
          error={formik.errors.password}
        />

        <Button type="submit"> Entrar </Button>
      </Form>
    </Container>
  );
};
