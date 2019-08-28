import axios from 'axios';

export default {
  getPokeData() {
    return axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=30');
  },
  getPokeByName(name) {
    return axios.get('https://pokeapi.co/api/v2/pokemon/' + name);
  }
}