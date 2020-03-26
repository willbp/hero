//import React, { useState } from 'react';
import React from 'react';

//import Header from './Header';//importa o Header de dentro do Header.js
import './global.css';

import Routes from './routes';



function App() {//função javascript q retorna html
  return (
    <Routes />
  );
}

export default App;















/*
//JSX javascript xml
//html dentro do javascript
function App() {//função javascript q retorna html



  const [counter, setCounter] = useState(0);//primeiro momento counter=0 e setCounter altera o valor de counter
  //o useState retorna Array [valor da variavel, função de atualização do valor]

  function increment(){
    setCounter(counter+1);
    console.log(counter);
  }

  return (
    //atributos do html id="title" porém é um atributo passado para componentes
    //ao invés de repassados para elementos do html
    //<h1>Hello World</h1>
    /*<Header title="Semana OmniStack">
      - Teste de Children
      </Header>

    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );


}

export default App;
*/
