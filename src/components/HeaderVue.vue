<script setup></script>

<template>
  <header>
    <img src="/src/assets/images/bulbasaur.png" />
    <img src="/src/assets/images/pokemon-logo.png" />
    <img src="/src/assets/images/charmander.png" />
  </header>
</template>

<style scoped lang="scss">
header {
  height: 85px;
  background-color: var(--header-bkgcolor);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 5rem;

    &:nth-child(2) {
      width: 8rem;
      height: 3.3rem;
    }
    &:nth-child(3) {
      transform: translateY(0.45rem);
    }
  }
}
</style>
