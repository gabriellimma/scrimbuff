import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.min.css';

import dark from './styles/themes/dark';
import GlobalStyle from './styles/global';

import usePersistedState from './utils/usePersistedState';

import Header from './components/Header';
import Footer from './components/Footer';

import Routes from './routes';

toast.configure({
  autoClose: 3000,
  draggable: false,
  position: toast.POSITION.TOP_RIGHT,
});

const App = (): JSX.Element => {
  const [theme] = usePersistedState<DefaultTheme>('theme', dark);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <div id="scrimbuff">
          <Routes />
        </div>
        <Footer />
      </BrowserRouter>

      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
