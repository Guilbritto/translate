import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { Header, Logo } from '../src/components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import defaultLogo from './images/logo-default.svg';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Logo>
          <img src={defaultLogo} />
          <span>PZM Translate</span>
        </Logo>

        <ToastContainer />
      </Header>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
