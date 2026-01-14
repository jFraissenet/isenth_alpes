<template>
  <div class="expertise-page">
    <!-- Hero Section -->
    <section class="expertise-hero chauffage">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <router-link to="/" class="back-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Retour à l'accueil
        </router-link>
        <div class="hero-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48">
            <path d="M12 2v2m0 16v2M4 12H2m20 0h-2m-2.93-6.36l-1.41 1.41m-9.32 9.32l-1.41 1.41m0-12.14l1.41 1.41m9.32 9.32l1.41 1.41M12 6a6 6 0 100 12 6 6 0 000-12z"/>
          </svg>
        </div>
        <h1>Chauffage</h1>
        <p class="hero-subtitle">Solutions de chauffage premium pour un confort optimal toute l'année</p>
      </div>
    </section>

    <!-- Réalisations Section -->
    <section class="realisations-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Nos Réalisations</span>
          <h2>Projets de chauffage réalisés</h2>
          <p>Découvrez nos installations et rénovations de systèmes de chauffage haut de gamme</p>
        </div>

        <div class="realisations-grid">
          <div
            v-for="realisation in realisations"
            :key="realisation.id"
            class="realisation-card"
          >
            <div class="realisation-image">
              <ImageGallery :images="realisation.images" :alt="realisation.title" />
              <span class="realisation-badge">{{ realisation.type }}</span>
            </div>
            <div class="realisation-content">
              <h3>{{ realisation.title }}</h3>
              <p class="realisation-description">{{ realisation.description }}</p>
              <div class="realisation-details">
                <div class="detail">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                  <span>{{ realisation.duration }}</span>
                </div>
                <div class="detail price">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                  <span>{{ realisation.price }}</span>
                </div>
              </div>
              <ul class="realisation-features">
                <li v-for="(feature, index) in realisation.features" :key="index">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Vous avez un projet de chauffage ?</h2>
        <p>Contactez-nous pour un devis personnalisé et gratuit</p>
        <a href="/#contact" class="cta-button">
          Demander un devis
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import ImageGallery from '../components/ImageGallery.vue'

const realisations = [
  {
    id: 1,
    title: 'Installation PAC Air/Eau - Villa Annecy',
    description: 'Remplacement d\'une ancienne chaudière fioul par une pompe à chaleur air/eau haute performance avec plancher chauffant.',
    type: 'Pompe à chaleur',
    duration: '2 semaines',
    price: '18 500 €',
    images: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'PAC Daikin Altherma 3 - 11kW',
      'Plancher chauffant 120m²',
      'Régulation connectée',
      'COP supérieur à 4.5'
    ]
  },
  {
    id: 2,
    title: 'Chaudière gaz condensation - Appartement Grenoble',
    description: 'Installation d\'une chaudière gaz à condensation murale avec production d\'eau chaude instantanée.',
    type: 'Chaudière gaz',
    duration: '3 jours',
    price: '4 800 €',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Viessmann Vitodens 100-W',
      'Rendement 98%',
      'Thermostat connecté Nest',
      'Garantie 5 ans'
    ]
  },
  {
    id: 3,
    title: 'Plancher chauffant - Chalet Megève',
    description: 'Création complète d\'un système de chauffage par le sol dans un chalet de luxe de 280m².',
    type: 'Plancher chauffant',
    duration: '4 semaines',
    price: '32 000 €',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Surface totale 280m²',
      'Régulation par zone (8 zones)',
      'Couplage PAC géothermique',
      'Confort thermique optimal'
    ]
  },
  {
    id: 4,
    title: 'Radiateurs design - Loft Chambéry',
    description: 'Remplacement des anciens radiateurs par des modèles design verticaux avec régulation intelligente.',
    type: 'Radiateurs',
    duration: '1 semaine',
    price: '8 200 €',
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      '6 radiateurs Acova Fassane',
      'Têtes thermostatiques connectées',
      'Design contemporain',
      'Économie d\'énergie 25%'
    ]
  }
]
</script>

<style scoped>
.expertise-page {
  min-height: 100vh;
}

/* Hero Section */
.expertise-hero {
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 2rem 4rem;
  background-size: cover;
  background-position: center;
}

.expertise-hero.chauffage {
  background-image: url('https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(230, 126, 34, 0.9) 0%, rgba(211, 84, 0, 0.85) 100%);
}

.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
  max-width: 800px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.back-link:hover {
  color: white;
  transform: translateX(-5px);
}

.hero-icon {
  width: 90px;
  height: 90px;
  margin: 0 auto 1.5rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.expertise-hero h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.95;
  max-width: 600px;
  margin: 0 auto;
}

/* Réalisations Section */
.realisations-section {
  padding: 5rem 2rem;
  background: var(--bg-light);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-label {
  display: inline-block;
  background: linear-gradient(135deg, #e67e22, #d35400);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.section-header h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: var(--primary-dark);
  margin-bottom: 1rem;
}

.section-header p {
  color: var(--text-light);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.realisations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
}

.realisation-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
}

.realisation-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

.realisation-image {
  position: relative;
  height: 100%;
  min-height: 300px;
}

.realisation-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.realisation-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: linear-gradient(135deg, #e67e22, #d35400);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.realisation-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.realisation-content h3 {
  font-size: 1.3rem;
  color: var(--primary-dark);
  margin-bottom: 0.8rem;
  line-height: 1.3;
}

.realisation-description {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.2rem;
}

.realisation-details {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.2rem;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid var(--bg-light);
}

.detail {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-light);
  font-size: 0.9rem;
}

.detail svg {
  color: var(--primary-color);
}

.detail.price {
  font-weight: 600;
  color: #e67e22;
}

.detail.price svg {
  color: #e67e22;
}

.realisation-features {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
}

.realisation-features li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 0;
  font-size: 0.9rem;
  color: var(--text-dark);
}

.realisation-features svg {
  color: #27ae60;
  flex-shrink: 0;
}

/* CTA Section */
.cta-section {
  padding: 5rem 2rem;
  background: linear-gradient(135deg, var(--primary-dark), var(--secondary-color));
  text-align: center;
  color: white;
}

.cta-section h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  color: white;
}

.cta-section p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: white;
  color: var(--primary-dark);
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.cta-button svg {
  transition: transform 0.3s ease;
}

.cta-button:hover svg {
  transform: translateX(5px);
}

/* Responsive */
@media (max-width: 968px) {
  .realisations-grid {
    grid-template-columns: 1fr;
  }

  .realisation-card {
    grid-template-columns: 1fr;
  }

  .realisation-image {
    min-height: 250px;
  }
}

@media (max-width: 480px) {
  .expertise-hero {
    padding: 100px 1rem 3rem;
  }

  .realisations-section {
    padding: 3rem 1rem;
  }

  .realisation-content {
    padding: 1.5rem;
  }

  .realisation-details {
    flex-direction: column;
    gap: 0.8rem;
  }
}
</style>
