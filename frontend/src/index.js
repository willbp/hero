import React from 'react';
import ReactDOM from 'react-dom';//integração do react com o navegador (DOm arvore de elementos)
import App from './App';// importando app na variavel app

ReactDOM.render(//renderizando p app dentro do documento com id root que está no app.js q é o HTML
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

