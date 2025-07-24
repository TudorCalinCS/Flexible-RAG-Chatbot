import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/:slug', component: ProductView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
