<script setup>
import TileVue from "./TileVue.vue";
import { ref, watch } from "vue";
import { usePokemonStore } from "@/stores/pokemonStore";

const pokemonStore = usePokemonStore();

let v_search = ref("");
let clickedTile = ref(null);

watch(clickedTile, (currentVal, oldVal) => {
  if (oldVal === null) {
    currentVal.classList.add("selected-pokenmon-class");
  } else {
    oldVal.classList.remove("selected-pokenmon-class");
    currentVal.classList.add("selected-pokenmon-class");
  }
});
</script>

<template>
  <section id="gallery-section">
    <section id="gallery-header">
      <input
        type="text"
        id="search-input"
        placeholder="Enter pokémon name"
        v-model.trim="v_search"
        @keydown.enter="pokemonStore.handle_findSearchedPokemon(v_search)"
      />
      <button @click="pokemonStore.handle_findSearchedPokemon(v_search)">Search</button>
    </section>

    <section id="gallery">
      <TileVue
        class="tile"
        v-for="obj in pokemonStore.pokemonList"
        :key="obj.name"
        :pokemonObj="obj"
        @click="(pokemonStore.selectedPokemon = obj), (clickedTile = $event.target)"
      />
    </section>

    <section id="gallery-footer">
      <h4>{{ pokemonStore.pokemonCount }} / 1272</h4>
    </section>
  </section>
</template>

<style scoped lang="scss">
#gallery-section {
  width: 100%;
  border-radius: 5px;
  display: grid;
  grid-template: auto 1fr auto / 1fr;
}

#gallery-header {
  height: 35px;
  background-color: var(--dark);
  padding: 0 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > * {
    outline: none;
    border: none;
  }

  input {
    width: 15rem;
    height: 30px;
    padding: 0 3px;
    border-radius: 3px 0 0 3px;
  }

  button {
    width: 70px;
    height: 30px;
    border-radius: 0 3px 3px 0;
    background-color: orangered;
    color: whitesmoke;
    font-weight: 800;
  }
}

#gallery {
  width: 100%;
  height: 100%;
  background-color: var(--dark);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-gap: 0.15rem;
  overflow-y: auto;
}

#gallery-footer {
  height: 25px;
  background: #222;
  padding: 0 5px;
  display: flex;
  align-items: center;
  color: lightgreen;
}
</style>
