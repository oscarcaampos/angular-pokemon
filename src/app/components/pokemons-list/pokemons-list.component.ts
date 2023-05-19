//components\pokemons-list\pokemons-list.component.ts

import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { PokemonListItem } from '../../models/pokemons.model';
import { Pokemon } from '../../models/pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {
  title = "angular-pokemon";
  allPokemons: PokemonListItem[] = [];
  pokemonDetails: Pokemon[] = [];

  constructor(private pokemonsService: PokemonsService, private router: Router) {}

  ngOnInit(): void {
    this.getAllPokemons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getAllPokemons(): void {
    this.pokemonsService.getAllPokemons().subscribe(
      (pokemons: PokemonListItem[]) => {
        this.allPokemons = pokemons;
        this.getAllPokemonDetails();
      },
      (error: any) => {
        console.error('Error occurred while fetching Pokémon list:', error);
      }
    );
  }

  getAllPokemonDetails(): void {
    for (const pokemon of this.allPokemons) {
      const pokemonId = this.extractPokemonIdFromUrl(pokemon.url);
      console.log(pokemonId);
      this.pokemonsService.getPokemonById(pokemonId).subscribe(
        (pokemonDetails: Pokemon) => {
          this.pokemonDetails.push(pokemonDetails);
        },
        (error: any) => {
          console.error(`Error occurred while fetching details for Pokémon with ID ${pokemonId}:`, error);
        }
      );
    }
  }

  showPokemonDetails(pokemon_id: number): void {
    this.router.navigate(['/pokemon', pokemon_id,], {replaceUrl: true});
  }

  private extractPokemonIdFromUrl(url: string): number {
    const urlParts = url.split('/');
    return parseInt(urlParts[urlParts.length - 2], 10);
  }
}
