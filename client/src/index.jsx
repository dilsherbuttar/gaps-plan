import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router.js';
require("babel-core/register");
require("babel-polyfill");




ReactDOM.render(<Router />, document.getElementById('app'));




