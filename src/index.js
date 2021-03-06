import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
//import Footer from '../src/components/Footer';

//import Header from '../src/components/Header';
//import Search from '../src/components/Search';
//import Carrusel from '../src/components/Carrusel';



//ReactDOM.render(<componente2/>, document.getElementById('root'));
//ReactDOM.render(<componente3/>, document.getElementById('root'));

import Layout from '../src/container/App';
ReactDOM.render(<Layout/>, document.getElementById('root'));

//import Login from '../src/container/Login';
//ReactDOM.render(<Login/>, document.getElementById('root'));

//import Register from '../src/container/Register';
//ReactDOM.render(<Register/>, document.getElementById('root'));


//ReactDOM.render(<Carrusel />, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Header />, document.getElementById('root'));
//ReactDOM.render(<Footer />, document.getElementById('root'));
//ReactDOM.render(<Search />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
