<template>
  <footer id="contact" class="footer">
    <div class="footer-content">
      <div class="footer-main">
        <div class="footer-brand">
          <div class="brand-logo">
            <img src="/logo.svg" alt="ISENTH'ALPES" class="footer-logo" />
            <h3>ISENTH'ALPES</h3>
          </div>
          <p class="brand-tagline">
            Votre partenaire de confiance pour tous vos projets de confort thermique
            haut de gamme dans les Alpes.
          </p>
          <div class="social-links">
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="link-group">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Chauffage</a></li>
              <li><a href="#services">Climatisation</a></li>
              <li><a href="#services">Plomberie</a></li>
              <li><a href="#services">Maintenance</a></li>
            </ul>
          </div>

          <div class="link-group">
            <h4>Entreprise</h4>
            <ul>
              <li><a href="#accueil">À propos</a></li>
              <li><a href="#partenaires">Partenaires</a></li>
              <li><a href="#">Réalisations</a></li>
              <li><a href="#">Recrutement</a></li>
            </ul>
          </div>

          <div class="link-group contact-info">
            <h4>Contact</h4>
            <ul>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Zone Alpes - Rhône-Alpes</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>04 XX XX XX XX</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>contact@isentalpes.fr</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} ISENTH'ALPES - Tous droits réservés</p>
        <div class="legal-links">
          <a href="#">Mentions légales</a>
          <a href="#">Politique de confidentialité</a>
          <a href="#">CGV</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: linear-gradient(180deg, var(--primary-dark) 0%, #1a1410 100%);
  color: white;
  padding: 5rem 2rem 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.footer-logo {
  height: 50px;
  width: auto;
  filter: brightness(0) invert(1);
}

.brand-logo h3 {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
}

.brand-tagline {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: var(--primary-color);
  transform: translateY(-3px);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.link-group h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--accent-gold);
}

.link-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-group li {
  margin-bottom: 0.8rem;
}

.link-group a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.link-group a:hover {
  color: white;
}

.contact-info li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
}

.contact-info svg {
  flex-shrink: 0;
  color: var(--primary-color);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
}

.legal-links {
  display: flex;
  gap: 2rem;
}

.legal-links a {
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.legal-links a:hover {
  color: white;
}

@media (max-width: 968px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 580px) {
  .footer {
    padding: 3rem 1rem 0;
  }

  .brand-logo {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .footer-logo {
    height: 40px;
  }

  .brand-logo h3 {
    font-size: 1.3rem;
  }

  .brand-tagline {
    font-size: 0.9rem;
  }

  .social-links a {
    width: 40px;
    height: 40px;
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .link-group h4 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .link-group li {
    margin-bottom: 0.6rem;
  }

  .link-group a,
  .contact-info li {
    font-size: 0.9rem;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer-bottom p {
    font-size: 0.8rem;
  }

  .legal-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .legal-links a {
    font-size: 0.8rem;
  }
}
</style>
