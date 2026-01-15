<template>
  <header class="header">
    <div class="header-container">
      <router-link to="/" class="logo-section" @click="closeMenu">
        <img src="/logo.svg" alt="ISENTH'ALPES Logo" class="logo" />
        <h1 class="company-name">ISENTH'ALPES</h1>
      </router-link>
      <nav class="navigation" :class="{ open: menuOpen }">
        <ul>
          <li><router-link to="/" @click="closeMenu">Accueil</router-link></li>
          <li><router-link to="/#expertises" @click="closeMenu">Expertises</router-link></li>
          <li><router-link to="/#services" @click="closeMenu">Services</router-link></li>
          <li><router-link to="/#partenaires" @click="closeMenu">Partenaires</router-link></li>
          <li><router-link to="/#contact" class="btn-contact" @click="closeMenu">Contact</router-link></li>
        </ul>
      </nav>
      <button class="mobile-menu-btn" :class="{ active: menuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="mobile-overlay" :class="{ open: menuOpen }" @click="closeMenu"></div>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

watch(route, () => {
  closeMenu()
})
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
  .header-container {
    padding: 0 1rem;
  }

  .company-name {
    font-size: 1.2rem;
    letter-spacing: 1px;
  }

  .logo {
    height: 40px;
  }

  .logo-section {
    gap: 0.5rem;
  }

  .navigation {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 320px;
    height: 100vh;
    background: white;
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.15);
    transition: right 0.3s ease;
    z-index: 1001;
    padding: 80px 2rem 2rem;
  }

  .navigation.open {
    right: 0;
  }

  .navigation ul {
    flex-direction: column;
    gap: 0;
  }

  .navigation li {
    border-bottom: 1px solid var(--bg-light);
  }

  .navigation a {
    display: block;
    padding: 1.2rem 0;
    font-size: 1.1rem;
  }

  .navigation a::after {
    display: none;
  }

  .btn-contact {
    display: inline-block;
    margin-top: 1rem;
    text-align: center;
    width: 100%;
  }

  .mobile-menu-btn {
    display: flex;
    z-index: 1002;
  }

  .mobile-menu-btn.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }

  .mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
  }

  .mobile-menu-btn.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  .mobile-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
  }

  .mobile-overlay.open {
    opacity: 1;
    visibility: visible;
  }
}

@media (max-width: 480px) {
  .company-name {
    font-size: 1rem;
  }

  .logo {
    height: 35px;
  }
}
</style>
