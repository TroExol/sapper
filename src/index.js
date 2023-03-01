import React from 'react';
import ReactDOM from 'react-dom/client';
import Jss from 'jss';
import DefaultUnits from 'jss-plugin-default-unit';
import VendorPrefixer from 'jss-plugin-vendor-prefixer';
import {ThemeProvider} from 'react-jss';

import './index.css';
import App from './App';
import theme from './themes/default';

Jss.use(
    DefaultUnits(),
    VendorPrefixer(),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
);
