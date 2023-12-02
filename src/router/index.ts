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
      path: '/reg',
      name: 'registation',
      component: (): Component => import('../views/RegView.vue')
    },
    {
      path: '/quest',
      name: 'questionnaire',
      component: (): Component => import('../views/QuestView.vue')
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
