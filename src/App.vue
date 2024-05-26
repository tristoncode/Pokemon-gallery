<script setup>
import HeaderVue from "./components/HeaderVue.vue";
import GallerySection from "./components/GallerySection.vue";
import PokemonDisplay from "./components/PokedexVue.vue";
import { onMounted } from "vue";

import { usePokemonStore } from "./stores/pokemonStore";

const pokemonStore = usePokemonStore();

onMounted(() => {
  pokemonStore.handle_getPokemonData();
});
</script>

<template>
  <HeaderVue />
  <main>
    <GallerySection />
    <PokemonDisplay />
  </main>
</template>

<style scoped lang="scss">
main {
  height: 100%;
  padding: 10px;
  display: flex;
  gap: 10px;

  & > section {
    max-height: 620px;
    border: solid 3px var(--dark);
    overflow: hidden;
  }
}
</style>
