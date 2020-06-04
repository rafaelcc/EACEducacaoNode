import React from 'react';

import './global.css';

import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;





  /* 
  import React, { useState } from 'react';
  import Header from './Header';
  const [counter, setCounter] =  useState(0);

  function increment(){
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header> Facilitando o aprendizado {counter} </Header>
      <button onClick={increment}>Incremetar</button>
    </div>
  ); */