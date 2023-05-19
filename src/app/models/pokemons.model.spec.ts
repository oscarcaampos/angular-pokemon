import { PokemonListItem, PokemonsResponse } from './pokemons.model';

describe('PokemonListItem', () => {
  it('should create an instance', () => {
    const pokemonListItem: PokemonListItem = {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/'
    };
    expect(pokemonListItem).toBeTruthy();
  });
});

describe('PokemonsResponse', () => {
  it('should create an instance', () => {
    const pokemonsResponse: PokemonsResponse = {
      count: 1281,
      next: 'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
      previous: null,
      results: [
        {
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/'
        },
        {
          name: 'ivysaur',
          url: 'https://pokeapi.co/api/v2/pokemon/2/'
        },
        // Add more PokemonListItem objects if needed
      ]
    };
    expect(pokemonsResponse).toBeTruthy();
  });
});
