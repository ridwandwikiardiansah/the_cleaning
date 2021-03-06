import React from 'react';
import axios from 'axios'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/js/App';
import * as serviceWorker from './serviceWorker';
import '../src/asset/font/Poppins-Black.ttf';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


window.axios=axios;
ReactDOM.render( <App />,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
