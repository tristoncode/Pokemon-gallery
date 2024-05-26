<script setup>
defineProps(["pokemonObj"]);
</script>

<template>
  <div>
    <img :src="pokemonObj.sprite" />
  </div>
</template>

<style scoped lang="scss">
.tile {
  width: min-content(5rem);
  height: (5rem);
  background-color: whitesmoke;
  border-radius: 0.15rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    background-color: var(--hover-tile-bkg-color);
  }
}
</style>
