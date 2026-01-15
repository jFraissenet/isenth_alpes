<template>
  <div class="expertise-page">
    <!-- Hero Section -->
    <section class="expertise-hero climatisation">
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
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/>
          </svg>
        </div>
        <h1>Climatisation</h1>
        <p class="hero-subtitle">Systèmes de climatisation haute performance pour un confort optimal</p>
      </div>
    </section>

    <!-- Réalisations Section -->
    <section class="realisations-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Nos Réalisations</span>
          <h2>Projets de climatisation réalisés</h2>
          <p>Découvrez nos installations de systèmes de climatisation premium</p>
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
        <h2>Vous avez un projet de climatisation ?</h2>
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
    title: 'Climatisation gainable - Villa moderne Aix-les-Bains',
    description: 'Installation complète d\'un système de climatisation gainable réversible pour une villa de 200m² avec régulation par zone.',
    type: 'Gainable',
    duration: '2 semaines',
    price: '15 800 €',
    images: [
      'https://images.unsplash.com/photo-1631545806609-4d567fa0e41c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Daikin FDXM gainable 12kW',
      '6 zones indépendantes',
      'Diffusion invisible par plafond',
      'Commande centralisée tactile'
    ]
  },
  {
    id: 2,
    title: 'Multi-split design - Appartement Annecy',
    description: 'Pose de 4 unités murales design dans un appartement haut standing avec finition personnalisée.',
    type: 'Multi-split',
    duration: '4 jours',
    price: '7 500 €',
    images: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Mitsubishi MSZ-EF Design',
      '4 unités intérieures',
      'Finition blanc nacré',
      'Pilotage smartphone WiFi'
    ]
  },
  {
    id: 3,
    title: 'VRV bureaux - Siège entreprise Grenoble',
    description: 'Système VRV complet pour des bureaux de 800m² avec gestion centralisée et récupération d\'énergie.',
    type: 'VRV/VRF',
    duration: '6 semaines',
    price: '85 000 €',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Daikin VRV IV - 56kW',
      '24 unités intérieures',
      'Récupération de chaleur',
      'GTC et supervision à distance'
    ]
  },
  {
    id: 4,
    title: 'Climatisation réversible - Chalet Courchevel',
    description: 'Installation d\'un système réversible haut de gamme adapté aux conditions alpines extrêmes.',
    type: 'Réversible',
    duration: '1 semaine',
    price: '12 400 €',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Mitsubishi Hyper Heating',
      'Fonctionnement jusqu\'à -25°C',
      'Déshumidification intégrée',
      'Mode silence nocturne 19dB'
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

.expertise-hero.climatisation {
  background-image: url('https://images.unsplash.com/photo-1631545806609-4d567fa0e41c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(52, 152, 219, 0.9) 0%, rgba(41, 128, 185, 0.85) 100%);
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
  background: linear-gradient(135deg, #3498db, #2980b9);
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
  background: linear-gradient(135deg, #3498db, #2980b9);
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
  color: #3498db;
}

.detail.price svg {
  color: #3498db;
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

  .section-header {
    margin-bottom: 3rem;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .expertise-hero {
    padding: 90px 1rem 2rem;
    min-height: 40vh;
  }

  .back-link {
    font-size: 0.85rem;
    margin-bottom: 1.5rem;
  }

  .hero-icon {
    width: 70px;
    height: 70px;
  }

  .expertise-hero h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .realisations-section {
    padding: 2.5rem 1rem;
  }

  .section-label {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }

  .section-header h2 {
    font-size: 1.5rem;
  }

  .section-header p {
    font-size: 0.9rem;
  }

  .realisation-image {
    min-height: 200px;
  }

  .realisation-badge {
    font-size: 0.75rem;
    padding: 0.3rem 0.8rem;
  }

  .realisation-content {
    padding: 1.2rem;
  }

  .realisation-content h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .realisation-description {
    font-size: 0.85rem;
    margin-bottom: 1rem;
  }

  .realisation-details {
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }

  .detail {
    font-size: 0.85rem;
  }

  .realisation-features li {
    font-size: 0.85rem;
    padding: 0.3rem 0;
  }

  .cta-section {
    padding: 3rem 1rem;
  }

  .cta-section h2 {
    font-size: 1.4rem;
  }

  .cta-section p {
    font-size: 0.95rem;
  }

  .cta-button {
    padding: 0.9rem 2rem;
    font-size: 1rem;
    width: 100%;
    justify-content: center;
  }

  .realisation-details {
    flex-direction: column;
    gap: 0.8rem;
  }
}
</style>
