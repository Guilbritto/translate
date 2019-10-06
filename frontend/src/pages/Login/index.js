import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Container, LoginBox } from './styles';
import logo from '~/assets/logo-default.svg';
import { signInRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O e-mail é obrigatótio'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <LoginBox>
        <div>
          <img src={logo} alt="PZM Enterprise" />
          <p>
            <span> PZM </span> Tools
          </p>
        </div>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="Login"
            autoComplete="off"
          />
          <Input
            name="password"
            type="password"
            placeholder="Sua senha secreta =)"
          />
          <button type="submit">Logar</button>
          <Link to="/forgot">* Esqueci minha senha</Link>
        </Form>
      </LoginBox>
    </Container>
  );
}
