// import 'react-hot-loader/patch';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application from './components/Application';
// import { AppContainer } from 'react-hot-loader'

const render = Component => {
  ReactDOM.render(<Component />, document.getElementById('app'));
};

render(Application);
