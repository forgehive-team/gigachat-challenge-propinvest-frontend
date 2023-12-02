import { createRouter, createWebHistory } from 'vue-router'

import type { Component } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: (): Component => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: (): Component => import('../views/AboutView.vue')
    },

    {
      path: '/form',
      name: 'form',
      component: (): Component => import('../views/FormView.vue')
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
