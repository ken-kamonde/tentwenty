import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/careers',
    name: 'Careers',
    component: () => import('../views/Careers.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/corporates',
    name: 'Corporates',
    component: () => import('../views/Corporates.vue')
  },
  {
    path: '/insights',
    name: 'Insights',
    component: () => import('../views/Insights.vue')
  },
  {
    path: '/privateclients',
    name: 'Privateclients',
    component: () => import('../views/Privateclients.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
