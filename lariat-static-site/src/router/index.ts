import { createRouter, createWebHistory } from 'vue-router'
import SiteContainer from '../views/SiteContainer.vue' 
import MerchItemDetail from '../views/MerchItemDetail.vue'
import EPK from '../views/EPK.vue' 
import SecretMusic from '../components/Secret.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SiteContainer
  },
  {
    path: '/merch/:id',
    name: 'MerchItemDetail',
    component: MerchItemDetail
  },
  {
    path: '/epk',
    name: 'EPK',
    component: EPK
  },
  {
    path: '/secret-music',
    name: 'SecretMusic',
    component: SecretMusic
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
