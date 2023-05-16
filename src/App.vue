<template>
  <Test/>
</template>

<script>
import Test from './views/Test.vue'

export default {
  name: 'App',
  components: {
    Test
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

body {
  background-color: #141d26; /* Couleur de fond sombre */
  color: #e8e8e8; /* Couleur du texte */
}

.edit-button {
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}
</style>
