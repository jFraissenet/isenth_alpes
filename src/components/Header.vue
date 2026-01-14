<template>
  <header class="header">
    <div class="header-container">
      <router-link to="/" class="logo-section">
        <img src="/logo.svg" alt="ISENTH'ALPES Logo" class="logo" />
        <h1 class="company-name">ISENTH'ALPES</h1>
      </router-link>
      <nav class="navigation">
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/#expertises">Expertises</router-link></li>
          <li><router-link to="/#services">Services</router-link></li>
          <li><router-link to="/#partenaires">Partenaires</router-link></li>
          <li><router-link to="/#contact" class="btn-contact">Contact</router-link></li>
        </ul>
      </nav>
      <button class="mobile-menu-btn" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 0.8rem 0;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  height: 50px;
  width: auto;
}

.company-name {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-dark);
  letter-spacing: 2px;
}

.navigation ul {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.navigation a {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
  position: relative;
}

.navigation a:hover {
  color: var(--primary-color);
}

.navigation a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width 0.3s ease;
}

.navigation a:hover::after {
  width: 100%;
}

.btn-contact {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white !important;
  padding: 0.7rem 1.5rem;
  border-radius: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease !important;
}

.btn-contact::after {
  display: none !important;
}

.btn-contact:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(199, 109, 57, 0.4);
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: var(--primary-dark);
  border-radius: 2px;
  transition: all 0.3s ease;
}

@media (max-width: 968px) {
  .navigation {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }
}
</style>
