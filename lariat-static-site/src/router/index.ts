import { createRouter, createWebHistory } from 'vue-router'
import SiteContainer from '../views/SiteContainer.vue' // Adjust path if needed
import MerchItemDetail from '../views/MerchItemDetail.vue' // Keep this
import EPK from '../views/EPK.vue' // Keep this

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SiteContainer // This is the big change
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
  }
  // Remove the old /shows, /music, /merch routes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router