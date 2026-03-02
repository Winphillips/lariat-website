import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import SiteContainer from '../views/SiteContainer.vue'
import MerchItemDetail from '../views/MerchItemDetail.vue'
import EPK from '../views/EPK.vue'
import { hasSecretAccess } from '@/services/secretAccessService'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: SiteContainer,
    meta: {
      title: 'LARIAT | Fayetteville, AR Indie Folktronica Band',
      description: 'LARIAT is a self-produced indie band from Fayetteville, Arkansas, blending alternative, folk, and electronic influences. Find music, live shows, merch, and booking info.'
    }
  },
  {
    path: '/merch/:id',
    name: 'MerchItemDetail',
    component: MerchItemDetail,
    meta: {
      title: 'LARIAT Merch',
      description: 'Shop handmade LARIAT merch including shirts, sweatpants, and limited-run drops.'
    }
  },
  {
    path: '/epk',
    name: 'EPK',
    component: EPK,
    meta: {
      title: 'LARIAT EPK | Booking, Photos, Bio, and Press Assets',
      description: 'Download press photos, artwork, bios, highlights, and streaming links from the official LARIAT electronic press kit.'
    }
  },
  {
    path: '/secret-music',
    name: 'SecretMusic',
    component: () => import('../components/Secret.vue'),
    meta: {
      requiresSecretAccess: true,
      title: 'Secret Music | LARIAT',
      description: 'Hidden bonus tracks and private LARIAT material.',
      robots: 'noindex, nofollow'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: 'Page Not Found | LARIAT',
      description: 'The page you requested could not be found.',
      robots: 'noindex, follow'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to) => {
  if (to.meta.requiresSecretAccess && !hasSecretAccess()) {
    return { path: '/' }
  }

  return true
})

export default router
