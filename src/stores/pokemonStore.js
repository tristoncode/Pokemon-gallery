import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const usePokemonStore = defineStore("pokemonStore", () => {
  let pokemonList = ref([]);
  let selectedPokemon = ref({});

  const pokemonCount = computed(() => pokemonList.value.length);

  const threeFightingMoves = computed(() => {
    let threeMoves = new Set([]);
    const movesLength = selectedPokemon.value.moves.length;
    const rn = () => Math.floor(Math.random() * movesLength);

    if (movesLength >= 3) {
      for (let i = 0; i < 3; i++) {
        threeMoves.add(selectedPokemon.value.moves[rn()].move.name.replaceAll("-", " "));
      }
    } else if (movesLength === 2) {
      for (let i = 0; index < 2; i++) {
        threeMoves.add(selectedPokemon.value.moves[rn()].move.name.replaceAll("-", " "));
      }
    } else {
      threeMoves.add(selectedPokemon.value.moves[rn()].move.name.replaceAll("-", " "));
    }

    return threeMoves;
  });

  const weight_in_Kg_and_Lbs = computed(() => {
    const addDecimal = (num) => {
      return (num / 10).toFixed(1);
    };
    const toKGs = addDecimal(selectedPokemon.value.weight);
    const toLbs = (toKGs * 2.2046).toFixed(1);

    return `${toKGs} Kilograms / ${toLbs} pounds`;
  });

  async function handle_getPokemonData() {
    const res__names = await fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=5000");
    const data__names = await res__names.json();
    const names = data__names.results.map((obj) => obj.name);

    names.forEach(async (name) => {
      const res__pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data__pokemon = await res__pokemon.json();
      const sprite = data__pokemon.sprites.other["official-artwork"].front_default;
      const types = data__pokemon.types;
      const moves = data__pokemon.moves;
      const weight = data__pokemon.weight;

      pokemonList.value.push({ name, sprite, types, moves, weight });
      // filter out null sprites
      pokemonList.value = pokemonList.value.filter((obj) => obj.sprite !== null);
    });
  }

  function handle_findSearchedPokemon(v_search) {
    const pokemonObj = pokemonList.value.find((obj) => obj.name === v_search.toLowerCase());
    if (pokemonObj !== undefined) selectedPokemon.value = pokemonObj;
    else selectedPokemon.value = {};
  }

  return {
    handle_getPokemonData,
    pokemonList,
    pokemonCount,
    selectedPokemon,
    threeFightingMoves,
    weight_in_Kg_and_Lbs,
    handle_findSearchedPokemon,
  };
});
