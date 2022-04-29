import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { GlobalStyle } from './global-style';

render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
