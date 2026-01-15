<template>
  <section id="accueil" class="hero">
    <div class="hero-background"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h2 class="hero-title">Excellence & Savoir-Faire</h2>
      <p class="hero-subtitle">
        Spécialiste du confort thermique haut de gamme dans les Alpes
      </p>

      <div id="expertises" class="expertise-cards">
        <router-link
          v-for="(expertise, index) in expertises"
          :key="expertise.id"
          :to="expertise.link"
          class="expertise-card"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <div class="card-icon">
            <component :is="expertise.icon" />
          </div>
          <h3>{{ expertise.title }}</h3>
          <p>{{ expertise.description }}</p>
          <span class="card-link">
            Voir nos réalisations
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </router-link>
      </div>

      <a href="#services" class="cta-button">
        Découvrir nos services
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17l9.2-9.2M17 17V7H7"/>
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

// Icônes SVG en composants
const HeatingIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '1.5',
  width: '48',
  height: '48'
}, [
  h('path', { d: 'M12 2v2m0 16v2M4 12H2m20 0h-2m-2.93-6.36l-1.41 1.41m-9.32 9.32l-1.41 1.41m0-12.14l1.41 1.41m9.32 9.32l1.41 1.41M12 6a6 6 0 100 12 6 6 0 000-12z' })
])

const CoolingIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '1.5',
  width: '48',
  height: '48'
}, [
  h('path', { d: 'M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07M12 6l-2 2 2 2 2-2-2-2zM6 12l2-2-2-2-2 2 2 2zM18 12l-2 2 2 2 2-2-2-2zM12 18l2-2-2-2-2 2 2 2z' })
])

const PlumbingIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '1.5',
  width: '48',
  height: '48'
}, [
  h('path', { d: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM17 14v3a4 4 0 01-4 4h-2M7 10v4M17 10v4' })
])

const ServiceIcon = () => h('svg', {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '1.5',
  width: '48',
  height: '48'
}, [
  h('path', { d: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z' })
])

const expertises = [
  {
    id: 1,
    icon: HeatingIcon,
    title: 'Chauffage',
    description: 'Solutions de chauffage premium pour un confort optimal',
    link: '/chauffage'
  },
  {
    id: 2,
    icon: CoolingIcon,
    title: 'Climatisation',
    description: 'Systèmes de climatisation haute performance',
    link: '/climatisation'
  },
  {
    id: 3,
    icon: PlumbingIcon,
    title: 'Plomberie',
    description: 'Installations sanitaires de qualité supérieure',
    link: '/plomberie'
  },
  {
    id: 4,
    icon: ServiceIcon,
    title: 'Service',
    description: 'Maintenance et dépannage réactif 7j/7',
    link: '/service'
  }
]
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 2rem 4rem;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(45, 35, 30, 0.92) 0%,
    rgba(80, 50, 35, 0.88) 50%,
    rgba(120, 70, 45, 0.85) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1200px;
  width: 100%;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 2px 4px 20px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 0.8s ease-out;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 4rem;
  font-weight: 300;
  letter-spacing: 1px;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.expertise-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.expertise-card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: fadeInUp 0.8s ease-out both;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.expertise-card:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.18);
  border-color: var(--accent-gold);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-gold));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: transform 0.3s ease;
}

.expertise-card:hover .card-icon {
  transform: scale(1.1) rotate(5deg);
}

.expertise-card h3 {
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.expertise-card p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent-gold);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: auto;
}

.expertise-card:hover .card-link {
  color: white;
}

.card-link svg {
  transition: transform 0.3s ease;
}

.expertise-card:hover .card-link svg {
  transform: translateX(5px);
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  text-decoration: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(199, 109, 57, 0.5);
}

.cta-button svg {
  transition: transform 0.3s ease;
}

.cta-button:hover svg {
  transform: translate(3px, -3px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 1rem 3rem;
    min-height: auto;
  }

  .hero-title {
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }

  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }

  .expertise-cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .expertise-card {
    padding: 1.5rem 1rem;
  }

  .expertise-card h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .expertise-card p {
    font-size: 0.85rem;
    line-height: 1.5;
    margin-bottom: 0.8rem;
  }

  .card-icon {
    width: 55px;
    height: 55px;
    margin-bottom: 1rem;
  }

  .card-icon svg {
    width: 28px;
    height: 28px;
  }

  .card-link {
    font-size: 0.8rem;
  }

  .cta-button {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 90px 1rem 2rem;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-subtitle {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }

  .expertise-cards {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .expertise-card {
    padding: 1.5rem;
  }

  .expertise-card h3 {
    font-size: 1.2rem;
  }

  .expertise-card p {
    font-size: 0.9rem;
  }

  .card-icon {
    width: 60px;
    height: 60px;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
