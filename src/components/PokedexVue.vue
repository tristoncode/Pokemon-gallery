<script setup>
import { usePokemonStore } from "@/stores/pokemonStore";
const pokemonStore = usePokemonStore();
</script>

<template>
  <section id="pokemon-display">
    <section id="display-header">
      <img src="/src/assets/images/pokeball.png" />
      <h2>Pokédex</h2>
      <img src="/src/assets/images/pokeball.png" />
    </section>

    <section>
      <div id="pokemon-found-cont" v-if="Object.keys(pokemonStore.selectedPokemon).length !== 0">
        <div id="img-and-name" :class="['selected-pokenmon-class']">
          <div>
            <img :src="pokemonStore.selectedPokemon.sprite" />
          </div>
          <h3>{{ pokemonStore.selectedPokemon.name }}</h3>
        </div>

        <div id="additional-info">
          <div>
            <h4>Type</h4>
            <span v-for="obj in pokemonStore.selectedPokemon.types" :key="obj.type.name">
              {{ obj.type.name }}
            </span>
          </div>
          <div>
            <h4>Fighting Moves (3)</h4>
            <span v-for="obj in pokemonStore.threeFightingMoves" :key="obj"> {{ obj }}</span>
          </div>
          <div id="weight">
            <h4>Weight</h4>
            <span>{{ pokemonStore.weight_in_Kg_and_Lbs }}</span>
          </div>
        </div>
      </div>

      <div id="no-pokemon-found-cont" v-else>
        <img src="/src/assets/images/opened-pokeball.png" />
        <h3>Couldn't find Pokémon</h3>
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">
#pokemon-display {
  background-color: var(--dark);
  width: 500px;
  border-radius: 5px;
  display: grid;
  grid-template: auto 1fr / 1fr;
  overflow: hidden;
  text-transform: capitalize;
}
#display-header {
  height: 60px;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;

  img {
    width: 50px;
  }
}

#pokemon-found-cont {
  height: 100%;
  display: grid;
  grid-template: 1fr 1fr / 1fr;

  #img-and-name {
    display: grid;
    grid-template: 1fr auto / 1fr;
    text-align: center;
    border-radius: 3px;
    overflow: hidden;

    & > div {
      width: 100%;
      height: 280px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: 100%;
      }
    }
    h3 {
      color: whitesmoke;
      padding: 4px;
      font-weight: 8900;
    }
  }
}

#additional-info {
  background-color: var(--dark);
  color: whitesmoke;

  & > div {
    margin: 8px 0;
  }

  h4 {
    font-weight: 900;
  }
  span {
    margin: 0.15rem;
    background-color: #444;
    padding: 3px;
    border-radius: 3px;
  }
}
#weight {
  text-transform: initial;
}
/////////////////////////////////////////////////////
#no-pokemon-found-cont {
  height: 100%;
  background-color: whitesmoke;
  display: grid;
  grid-template: 1fr auto / 1fr;
  align-items: center;
  text-align: center;
  font-weight: 900;

  img {
    width: 15rem;
    margin: 0 auto;
  }
  h3 {
    padding: 40px;
  }
}
</style>
