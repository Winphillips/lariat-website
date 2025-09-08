import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import LandingPage from "@/views/LandingPage.vue";
import ShowsPage from "@/views/ShowsPage.vue";
import MusicPage from "@/views/MusicPage.vue";
import EPKPage from "@/views/EPK.vue";
import MerchItemDetail from '@/views/MerchItemDetail.vue';

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Landing", component: LandingPage },
  { path: "/shows", name: "Shows", component: ShowsPage },
  { path: "/music", name: "Music", component: MusicPage },
  { path: "/epk", name: "EPK", component: EPKPage },
  {
    path: '/merch',
    name: 'Merch',
    component: () => import('@/views/MerchPage.vue'),
  },
  {
    path: '/merch/:id',
    name: 'MerchItemDetail',
    component: MerchItemDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;