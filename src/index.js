import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
//import "./stylesheets/core/reset.scss";
import Design from './components/Design';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Design />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
