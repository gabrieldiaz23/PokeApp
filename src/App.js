import React from 'react';
import './App.css';
import API from './utils/API.js';
import List from './components/List';
import PokeSearch from './components/PokeSearch';

function App() {

  /* state = {
    pokemons: [],
    currentValue: '',
    searchRes: []
  } */

  return (
    <PokeSearch/>
  );
}

export default App;
