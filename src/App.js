import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route } from 'react-router-dom';
import PokeDetails from './PokeDetails';

function App() {
  return (
    <div className="App">
      {/* Exercise 1: After loading display the pokedex */}
      <BrowserRouter>  
        <Route exact path="/" render={ (props) => <Pokedex { ...props } pokemons={pokemons} /> } />
        <Route exact path="/pokedetails/:id" render={ (props) => <PokeDetails { ...props } /> } />
      </BrowserRouter>
    </div>
  );
}

export default App;