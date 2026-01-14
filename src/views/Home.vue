<template>
  <div class="home">
    <Hero />
    <Services />
    <Partners />
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import Services from '../components/Services.vue'
import Partners from '../components/Partners.vue'
</script>

<style scoped>
.home {
  min-height: 100vh;
}
</style>
