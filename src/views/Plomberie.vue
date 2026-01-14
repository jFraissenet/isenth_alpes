<template>
  <div class="expertise-page">
    <!-- Hero Section -->
    <section class="expertise-hero plomberie">
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
            <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM17 14v3a4 4 0 01-4 4h-2M7 10v4M17 10v4"/>
          </svg>
        </div>
        <h1>Plomberie</h1>
        <p class="hero-subtitle">Installations sanitaires haut de gamme et robinetterie design</p>
      </div>
    </section>

    <!-- Réalisations Section -->
    <section class="realisations-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Nos Réalisations</span>
          <h2>Projets de plomberie réalisés</h2>
          <p>Découvrez nos créations de salles de bains luxe et installations sanitaires premium</p>
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
        <h2>Vous avez un projet de plomberie ?</h2>
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
    title: 'Salle de bains luxe - Penthouse Annecy',
    description: 'Création complète d\'une salle de bains de 25m² avec douche italienne XXL, baignoire îlot et double vasque.',
    type: 'Salle de bains',
    duration: '4 semaines',
    price: '45 000 €',
    images: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Douche italienne 180x120cm',
      'Baignoire îlot Kaldewei',
      'Robinetterie Grohe Allure',
      'Carrelage grand format italien'
    ]
  },
  {
    id: 2,
    title: 'Rénovation complète - Appartement Chambéry',
    description: 'Réfection totale de la plomberie d\'un appartement ancien avec mise aux normes et création de 2 salles d\'eau.',
    type: 'Rénovation',
    duration: '3 semaines',
    price: '28 500 €',
    images: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Remplacement réseaux complets',
      '2 salles d\'eau créées',
      'Robinetterie Hansgrohe',
      'Chauffe-eau thermodynamique'
    ]
  },
  {
    id: 3,
    title: 'Suite parentale - Chalet Méribel',
    description: 'Aménagement d\'une suite parentale avec salle de bains spa, hammam et robinetterie thermostatique haut de gamme.',
    type: 'Suite parentale',
    duration: '5 semaines',
    price: '68 000 €',
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Hammam sur mesure',
      'Douche cascade et jets',
      'Robinetterie Dornbracht',
      'Chauffage au sol salle de bains'
    ]
  },
  {
    id: 4,
    title: 'Adoucisseur & filtration - Villa Grenoble',
    description: 'Installation d\'un système complet de traitement d\'eau avec adoucisseur, osmoseur et filtration anti-calcaire.',
    type: 'Traitement eau',
    duration: '2 jours',
    price: '3 800 €',
    images: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Adoucisseur BWT Perla',
      'Osmoseur cuisine',
      'Filtration entrée maison',
      'Contrat maintenance inclus'
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

.expertise-hero.plomberie {
  background-image: url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(26, 188, 156, 0.9) 0%, rgba(22, 160, 133, 0.85) 100%);
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
  background: linear-gradient(135deg, #1abc9c, #16a085);
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
  background: linear-gradient(135deg, #1abc9c, #16a085);
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
  color: #1abc9c;
}

.detail.price svg {
  color: #1abc9c;
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
