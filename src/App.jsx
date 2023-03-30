import './App.scss';
import React from 'react';
// import Card from './Components/Card';
// import {  getRandomDate, setLike } from './functions';
import Cards from './Components/Cards';

function App() {
  return (
    <div className="app">
      <h1>Dog's API</h1>
      <Cards />
    </div>
  );
}

export default App;
