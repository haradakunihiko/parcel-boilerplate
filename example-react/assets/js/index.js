import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import Application from './components/Application';
import { AppContainer } from 'react-hot-loader'

ReactDOM.render(<AppContainer><Application /></AppContainer>, document.getElementById('app'));
