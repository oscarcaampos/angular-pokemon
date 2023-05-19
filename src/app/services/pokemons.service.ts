//services\pokemons.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonListItem, PokemonsResponse } from '../models/pokemons.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<PokemonListItem[]> {
    return this.http.get<PokemonsResponse>(`${this.apiUrl}/pokemon/`).pipe(
      map((response: PokemonsResponse) => response.results)
    );
  }

  getPokemonById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiUrl}/pokemon/${id}/`);
  }
}
