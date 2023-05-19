import { Pokemon, Ability, Form, GameIndex, HeldItem, VersionDetail, Move, VersionGroupDetail, Species, Sprites } from './pokemon.model';

describe('Pokemon', () => {
  it('should create an instance', () => {
    const pokemon: Pokemon = {
      abilities: [
        {
          ability: {
            name: 'chlorophyll',
            url: 'https://pokeapi.co/api/v2/ability/34/'
          },
          is_hidden: false,
          slot: 1
        }
        // Add more Ability objects if needed
      ],
      base_experience: 64,
      forms: [
        {
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon-form/1/'
        }
        // Add more Form objects if needed
      ],
      game_indices: [
        {
          game_index: 1,
          version: {
            name: 'red',
            url: 'https://pokeapi.co/api/v2/version/1/'
          }
        }
        // Add more GameIndex objects if needed
      ],
      height: 7,
      held_items: [
        {
          item: {
            name: 'cheri-berry',
            url: 'https://pokeapi.co/api/v2/item/128/'
          },
          version_details: [
            {
              rarity: 50,
              version: {
                name: 'y',
                url: 'https://pokeapi.co/api/v2/version/24/'
              }
            }
            // Add more VersionDetail objects if needed
          ]
        }
        // Add more HeldItem objects if needed
      ],
      id: 1,
      is_default: true,
      location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1/encounters',
      moves: [
        {
          move: {
            name: 'razor-wind',
            url: 'https://pokeapi.co/api/v2/move/13/'
          },
          version_group_details: [
            {
              level_learned_at: 0,
              move_learn_method: {
                name: 'egg',
                url: 'https://pokeapi.co/api/v2/move-learn-method/2/'
              },
              version_group: {
                name: 'gold-silver',
                url: 'https://pokeapi.co/api/v2/version-group/3/'
              }
            }
            // Add more VersionGroupDetail objects if needed
          ]
        }
        // Add more Move objects if needed
      ],
      name: 'bulbasaur',
      order: 1,
      past_types: [],
      species: {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-species/1/'
      },
      sprites: {
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
        back_female: null,
        back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
        back_shiny_female: null,
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        front_female: null,
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png',
        front_shiny_female: null,
        other: {
          dream_world: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
            front_female: null
          },
          home: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
            front_female: null,
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png',
            front_shiny_female: null
          },
          'official-artwork': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png'
          }
        },
        versions: {
          'generation-i': {
            'red-blue': {
              back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/1.png',
              back_gray: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/1.png',
              back_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/1.png',
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/front/1.png',
              front_gray: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/front/gray/1.png',
              front_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/front/1.png'
            },
            yellow: {
              back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/1.png',
              back_gray: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/1.png',
              back_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/1.png',
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/front/1.png',
              front_gray: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/front/gray/1.png',
              front_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/front/1.png'
            }
          },
          'generation-ii': {
            crystal: {
              back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/1.png',
              back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/1.png',
              back_shiny_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/1.png',
              back_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/1.png',
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/front/1.png',
              front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/front/shiny/1.png',
              front_shiny_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/front/shiny/1.png',
              front_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/front/1.png'
            },
            gold: {
              back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/1.png',
              back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/1.png',
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/front/1.png',
              front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/front/shiny/1.png',
              front_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/front/1.png'
            },
            silver: {
              back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/1.png',
              back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/1.png',
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/front/1.png',
              front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/front/shiny/1.png',
              front_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/front/1.png'
            }
          }

          // Add more generations if needed
        }
      },
      stats: [
        {
          base_stat: 45,
          effort: 0,
          stat: {
            name: 'hp',
            url: 'https://pokeapi.co/api/v2/stat/1/'
          }
        }
        // Add more Stat objects if needed
      ],
      types: [
        {
          slot: 1,
          type: {
            name: 'grass',
            url: 'https://pokeapi.co/api/v2/type/12/'
          }
        }
        // Add more Type objects if needed
      ],
      weight: 69
    };
      expect(pokemon).toBeTruthy();
    });
  });
