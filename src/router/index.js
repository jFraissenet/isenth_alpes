import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Chauffage from '../views/Chauffage.vue'
import Climatisation from '../views/Climatisation.vue'
import Plomberie from '../views/Plomberie.vue'
import Service from '../views/Service.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chauffage',
    name: 'Chauffage',
    component: Chauffage
  },
  {
    path: '/climatisation',
    name: 'Climatisation',
    component: Climatisation
  },
  {
    path: '/plomberie',
    name: 'Plomberie',
    component: Plomberie
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
