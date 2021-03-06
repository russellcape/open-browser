import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';

import MainTab from "./components/MainTab";
import DaughterTab from "./components/DaughterTab";


ReactDOM.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainTab} />
        <Route path="/page2" component={DaughterTab} />
      </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
