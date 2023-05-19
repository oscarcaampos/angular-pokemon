//services\pokemons.model.ts

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}
