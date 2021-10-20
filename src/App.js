import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Exercise 1: After loading display the pokedex */}
      <BrowserRouter>  
        <h1> Pokedex </h1>
        <Pokedex pokemons={pokemons} />
      </BrowserRouter>
    </div>
  );
}

export default App;