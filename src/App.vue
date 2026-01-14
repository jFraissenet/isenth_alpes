<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

/* Variables CSS - Couleurs chaleureuses */
:root {
  /* Couleurs principales */
  --primary-color: #c76d39;
  --primary-dark: #2d231e;
  --secondary-color: #8b4513;
  --accent-gold: #d4a574;

  /* Couleurs de fond */
  --bg-light: #faf6f3;
  --bg-warm: #f5ebe0;

  /* Couleurs de texte */
  --text-dark: #2d231e;
  --text-light: #6b5b4f;

  /* Couleurs d'accent */
  --warm-orange: #e07c3e;
  --soft-brown: #a67c52;
  --cream: #fff8f0;
}

/* Reset et styles de base */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
  background-color: var(--bg-light);
  color: var(--text-dark);
  line-height: 1.6;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Typographie */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
  color: var(--primary-dark);
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--secondary-color);
}

img {
  max-width: 100%;
  height: auto;
}

/* Utilitaires */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Scrollbar personnalisée */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--bg-light);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-color);
}

/* Selection de texte */
::selection {
  background: var(--primary-color);
  color: white;
}

/* Animations globales */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
