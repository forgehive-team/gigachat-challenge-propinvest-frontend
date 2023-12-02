import { createRouter, createWebHistory } from 'vue-router'

import type { Component } from 'vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: (): Component => import('../views/AboutView.vue')
    },
    {
      path: '/circle',
      name: 'home 2.0',
      component: (): Component => import('../views/CircleView.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: (): Component => import('../views/AccountView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: (): Component => import('../views/ProjectsView.vue')
    }
  ]
})

export default router
