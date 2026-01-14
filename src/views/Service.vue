<template>
  <div class="expertise-page">
    <!-- Hero Section -->
    <section class="expertise-hero service">
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
            <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <h1>Service & Maintenance</h1>
        <p class="hero-subtitle">Accompagnement et maintenance de vos installations tout au long de l'année</p>
      </div>
    </section>

    <!-- Réalisations Section -->
    <section class="realisations-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Nos Interventions</span>
          <h2>Exemples de prestations de service</h2>
          <p>Découvrez nos interventions de maintenance, dépannage et optimisation</p>
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

    <!-- Offres de contrat -->
    <section class="contracts-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Nos Contrats</span>
          <h2>Formules de maintenance</h2>
          <p>Choisissez la formule adaptée à vos besoins</p>
        </div>

        <div class="contracts-grid">
          <div class="contract-card">
            <div class="contract-header essentiel">
              <h3>Essentiel</h3>
              <div class="contract-price">
                <span class="price">190€</span>
                <span class="period">/an</span>
              </div>
            </div>
            <ul class="contract-features">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                1 visite d'entretien annuelle
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                Vérification complète
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                Rapport d'intervention
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                Assistance téléphonique
              </li>
            </ul>
          </div>

          <div class="contract-card featured">
            <div class="contract-badge">Populaire</div>
            <div class="contract-header confort">
              <h3>Confort</h3>
              <div class="contract-price">
                <span class="price">350€</span>
                <span class="period">/an</span>
              </div>
            </div>
            <ul class="contract-features">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                2 visites d'entretien annuelles
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                Dépannage prioritaire 48h
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                Main d'œuvre incluse
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                -15% sur les pièces
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                Assistance 7j/7
              </li>
            </ul>
          </div>

          <div class="contract-card">
            <div class="contract-header premium">
              <h3>Premium</h3>
              <div class="contract-price">
                <span class="price">590€</span>
                <span class="period">/an</span>
              </div>
            </div>
            <ul class="contract-features">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                Visites illimitées
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                Dépannage urgent 24h
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                Pièces & main d'œuvre incluses
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                Télésurveillance connectée
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                Interlocuteur dédié
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Besoin d'une intervention ou d'un contrat ?</h2>
        <p>Contactez-nous pour un diagnostic gratuit</p>
        <a href="/#contact" class="cta-button">
          Nous contacter
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
    title: 'Contrat maintenance - Résidence Les Alpages',
    description: 'Prise en charge de la maintenance annuelle de 24 appartements incluant chaudières et VMC.',
    type: 'Contrat annuel',
    duration: '12 mois',
    price: '8 400 €/an',
    images: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      '24 chaudières gaz',
      '2 visites par an par logement',
      'Dépannage prioritaire',
      'Rapport annuel de performance'
    ]
  },
  {
    id: 2,
    title: 'Dépannage urgent - Hôtel 4* Chamonix',
    description: 'Intervention en urgence sur une panne de chauffage central en pleine saison hivernale.',
    type: 'Dépannage',
    duration: '4 heures',
    price: '480 €',
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Intervention sous 2h',
      'Diagnostic complet',
      'Remplacement circulateur',
      'Remise en service immédiate'
    ]
  },
  {
    id: 3,
    title: 'Optimisation énergétique - Bureaux Grenoble',
    description: 'Audit et optimisation d\'un système de climatisation VRV pour réduire la consommation énergétique.',
    type: 'Optimisation',
    duration: '1 semaine',
    price: '2 800 €',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Audit thermique complet',
      'Reprogrammation GTC',
      'Équilibrage des réseaux',
      'Économie de 22% constatée'
    ]
  },
  {
    id: 4,
    title: 'Mise en service PAC - Villa Talloires',
    description: 'Mise en service et paramétrage d\'une pompe à chaleur géothermique nouvellement installée.',
    type: 'Mise en service',
    duration: '1 journée',
    price: '650 €',
    images: [
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Paramétrage courbes de chauffe',
      'Configuration régulation',
      'Formation utilisateur',
      'Connexion application mobile'
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

.expertise-hero.service {
  background-image: url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(199, 109, 57, 0.9) 0%, rgba(139, 69, 19, 0.85) 100%);
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
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
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
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
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
  color: var(--primary-color);
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

/* Contracts Section */
.contracts-section {
  padding: 5rem 2rem;
  background: white;
}

.contracts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.contract-card {
  background: var(--bg-light);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.contract-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.contract-card.featured {
  background: white;
  border: 2px solid var(--primary-color);
  transform: scale(1.05);
}

.contract-card.featured:hover {
  transform: scale(1.05) translateY(-5px);
}

.contract-badge {
  position: absolute;
  top: -1px;
  right: 20px;
  background: var(--primary-color);
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 0 0 10px 10px;
  font-size: 0.8rem;
  font-weight: 600;
}

.contract-header {
  padding: 2rem;
  text-align: center;
  color: white;
}

.contract-header.essentiel {
  background: linear-gradient(135deg, #95a5a6, #7f8c8d);
}

.contract-header.confort {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
}

.contract-header.premium {
  background: linear-gradient(135deg, #2c3e50, #34495e);
}

.contract-header h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}

.contract-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.3rem;
}

.contract-price .price {
  font-size: 2.5rem;
  font-weight: 700;
}

.contract-price .period {
  font-size: 1rem;
  opacity: 0.9;
}

.contract-features {
  list-style: none;
  padding: 2rem;
  margin: 0;
}

.contract-features li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.7rem 0;
  color: var(--text-dark);
  font-size: 0.95rem;
}

.contract-features svg {
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

  .contract-card.featured {
    transform: none;
  }

  .contract-card.featured:hover {
    transform: translateY(-5px);
  }
}

@media (max-width: 480px) {
  .expertise-hero {
    padding: 100px 1rem 3rem;
  }

  .realisations-section,
  .contracts-section {
    padding: 3rem 1rem;
  }

  .realisation-content {
    padding: 1.5rem;
  }

  .realisation-details {
    flex-direction: column;
    gap: 0.8rem;
  }

  .contracts-grid {
    grid-template-columns: 1fr;
  }
}
</style>
