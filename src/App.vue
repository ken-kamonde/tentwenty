<template>
  <div class="app">
    <Navbar />
    <router-view/>
  </div> 
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');

#app {
  font-family: 'Poppins';
  /* max-height: 100vh; */
  /* position: relative; */
}

html, body {
  font-family: 'Poppins';
}

/* .container {
  padding: 0 20px;
  max-width: 1140px;
  margin: 0 auto;
} */

</style>
