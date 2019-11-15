import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';

import {Store} from './store';
import { Provider } from 'react-redux';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: indigo,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={Store}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
