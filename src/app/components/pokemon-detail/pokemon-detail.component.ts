//components\pokemon-detail\pokemon-detail.component.ts

import { Router } from '@angular/router';
import { PokemonsService } from './../../services/pokemons.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  title = "angular-pokemon-detail";
  pokemon?: Pokemon;

  constructor(private pokemonsService: PokemonsService, private router: Router) {}

  ngOnInit() {
    this.getPokemonById();
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    window.scrollTo({ top: vh, behavior: 'smooth' });
  }

  getPokemonById(): void {
    const id = parseInt(this.router.url.split('/')[2], 10);
    this.pokemonsService.getPokemonById(id).subscribe(
      (pokemonDetails: Pokemon) => {
        this.pokemon = pokemonDetails;
        this.sortMovesByLevel();
      },
      (error: any) => {
        console.error(`Error occurred while fetching details for Pokémon with ID ${id}:`, error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/pokemon'], {replaceUrl: true});
  }

  sortMovesByLevel(): void {
    if (!this.pokemon) {
      return;
    }
    this.pokemon.moves.sort((move1, move2) => {
      const level1 = move1.version_group_details[0].level_learned_at;
      const level2 = move2.version_group_details[0].level_learned_at;
      return level1 - level2;
    });
  }

}
