import React from 'react';
import ReactDOM from 'react-dom';
import Home from './View/Home';


/* INJETA A FUNÇÃO QUE REPRESENTA A PÁGINA DE HOME NO DOC HTML ATRAVÉS DA DIV ROOT */
ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
