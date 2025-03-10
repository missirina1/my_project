import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button } from '@mui/material';
import styles from './Task9.module.css';

function LoginForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <h1>Task 9</h1>
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            margin="normal"
          />
          <Field
            as={TextField}
            name="password"
            type="password"
            label="Пароль"
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Войти
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
