import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './app';
import { GlobalStyle } from './global-style'

render(
    <React.Fragment>
        <GlobalStyle/>
        <App/>
    </React.Fragment>, document.getElementById('root'));

