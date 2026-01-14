<template>
  <section id="partenaires" class="partners-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Nos Partenaires</span>
        <h2 class="section-title">Des marques d'excellence</h2>
        <p class="section-description">
          Nous collaborons avec les plus grandes marques du secteur pour vous garantir
          des équipements fiables, performants et durables.
        </p>
      </div>

      <div class="partners-grid">
        <div
          v-for="partner in partners"
          :key="partner.id"
          class="partner-card"
        >
          <div class="partner-logo">
            <span class="partner-initial">{{ partner.name.charAt(0) }}</span>
          </div>
          <h3>{{ partner.name }}</h3>
          <p>{{ partner.description }}</p>
          <span class="partner-category">{{ partner.category }}</span>
        </div>
      </div>

      <!-- Section Qualifications -->
      <div class="qualifications-section">
        <h3 class="qualifications-title">Nos Qualifications</h3>
        <p class="qualifications-subtitle">
          Des certifications qui garantissent notre expertise et notre engagement qualité
        </p>
        <div class="qualifications-grid">
          <div
            v-for="qualification in qualifications"
            :key="qualification.id"
            class="qualification-card"
          >
            <div class="qualification-logo" :style="{ background: qualification.bgColor }">
              <span class="qualification-text" :style="{ color: qualification.textColor }">
                {{ qualification.shortName }}
              </span>
            </div>
            <h4>{{ qualification.name }}</h4>
            <p>{{ qualification.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const qualifications = [
  {
    id: 1,
    name: 'RGE',
    shortName: 'RGE',
    description: 'Reconnu Garant de l\'Environnement',
    bgColor: 'linear-gradient(135deg, #2e7d32, #43a047)',
    textColor: '#ffffff'
  },
  {
    id: 2,
    name: 'QualiPAC',
    shortName: 'PAC',
    description: 'Qualification Pompes à Chaleur',
    bgColor: 'linear-gradient(135deg, #1565c0, #42a5f5)',
    textColor: '#ffffff'
  },
  {
    id: 3,
    name: 'Qualibat',
    shortName: 'QB',
    description: 'Qualification Bâtiment',
    bgColor: 'linear-gradient(135deg, #c62828, #ef5350)',
    textColor: '#ffffff'
  },
  {
    id: 4,
    name: 'Qualibois',
    shortName: 'BOIS',
    description: 'Qualification Chauffage Bois',
    bgColor: 'linear-gradient(135deg, #6d4c41, #8d6e63)',
    textColor: '#ffffff'
  },
  {
    id: 5,
    name: 'QualiSOL',
    shortName: 'SOL',
    description: 'Qualification Solaire Thermique',
    bgColor: 'linear-gradient(135deg, #f57c00, #ffb74d)',
    textColor: '#ffffff'
  },
  {
    id: 6,
    name: 'PG',
    shortName: 'PG',
    description: 'Professionnel du Gaz',
    bgColor: 'linear-gradient(135deg, #5c6bc0, #7986cb)',
    textColor: '#ffffff'
  }
]

const partners = [
  {
    id: 1,
    name: 'Daikin',
    description: 'Leader mondial de la climatisation et des pompes à chaleur',
    category: 'Climatisation & PAC'
  },
  {
    id: 2,
    name: 'Atlantic',
    description: 'Solutions de confort thermique Made in France',
    category: 'Chauffage'
  },
  {
    id: 3,
    name: 'Viessmann',
    description: 'Excellence allemande en systèmes de chauffage',
    category: 'Chaudières'
  },
  {
    id: 4,
    name: 'Grohe',
    description: 'Robinetterie design et innovation sanitaire',
    category: 'Plomberie'
  },
  {
    id: 5,
    name: 'Mitsubishi Electric',
    description: 'Technologies de pointe pour le confort climatique',
    category: 'Climatisation'
  },
  {
    id: 6,
    name: 'Hansgrohe',
    description: 'L\'art de la douche et robinetterie premium',
    category: 'Sanitaire'
  },
  {
    id: 7,
    name: 'Saunier Duval',
    description: 'Chauffage et eau chaude sanitaire depuis 1907',
    category: 'Chauffage'
  },
  {
    id: 8,
    name: 'Toshiba',
    description: 'Innovation japonaise pour le confort intérieur',
    category: 'Climatisation'
  }
]
</script>

<style scoped>
.partners-section {
  padding: 8rem 2rem;
  background: linear-gradient(180deg, white 0%, var(--bg-warm) 100%);
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
  background: linear-gradient(135deg, var(--primary-color), var(--accent-gold));
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--primary-dark);
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-description {
  font-size: 1.15rem;
  color: var(--text-light);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-bottom: 5rem;
}

.partner-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.partner-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  border-color: var(--primary-color);
}

.partner-logo {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, var(--bg-light), var(--bg-warm));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.partner-card:hover .partner-logo {
  background: linear-gradient(135deg, var(--primary-color), var(--accent-gold));
}

.partner-initial {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  transition: color 0.3s ease;
}

.partner-card:hover .partner-initial {
  color: white;
}

.partner-card h3 {
  font-size: 1.3rem;
  color: var(--primary-dark);
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.partner-card p {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.partner-category {
  display: inline-block;
  background: var(--bg-light);
  color: var(--primary-color);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Section Qualifications */
.qualifications-section {
  background: var(--bg-light);
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
}

.qualifications-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: var(--primary-dark);
  margin-bottom: 0.8rem;
  font-weight: 700;
}

.qualifications-subtitle {
  color: var(--text-light);
  font-size: 1rem;
  margin-bottom: 2.5rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.qualifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.qualification-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.qualification-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.qualification-logo {
  width: 70px;
  height: 70px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.qualification-card:hover .qualification-logo {
  transform: scale(1.1);
}

.qualification-text {
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 1px;
}

.qualification-card h4 {
  font-size: 1.1rem;
  color: var(--primary-dark);
  margin-bottom: 0.4rem;
  font-weight: 600;
}

.qualification-card p {
  font-size: 0.8rem;
  color: var(--text-light);
  line-height: 1.4;
}

@media (max-width: 768px) {
  .partners-section {
    padding: 4rem 1rem;
  }

  .qualifications-section {
    padding: 2rem 1rem;
  }

  .qualifications-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .qualification-card {
    padding: 1rem 0.5rem;
  }

  .qualification-logo {
    width: 55px;
    height: 55px;
  }

  .qualification-text {
    font-size: 0.9rem;
  }

  .qualification-card h4 {
    font-size: 0.9rem;
  }

  .qualification-card p {
    font-size: 0.7rem;
  }
}

@media (max-width: 480px) {
  .qualifications-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
