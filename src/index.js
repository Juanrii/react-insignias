// const element = document.createElement('h1');
// element.innerText = 'Hello Platzi Badges!'

// const container = document.getElementById('root');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom'
import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNew';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

const container = document.getElementById('root');

// ReactDOM.render(__que__, __donde__);
ReactDOM.render( <BadgeNew />, container);