<template>
  <header class="flex justify-center py-10">
    <div class="container flex justify-between items-center">
      <div class="self-start text-secondary">
        <IconLogo />
      </div>

      <div class="flex space-x-32 xl:space-x-56 text-secondary font-light text-xl">
        <template v-if="isLoggedIn">
          <menu class="flex flex-row space-x-20">
            <RouterLink to="/">О компании</RouterLink>
            <RouterLink to="/projects">Рекомендации</RouterLink>
          </menu>
          <RouterLink to="/account" class="flex flex-col text-accent">
            <IconPerson />
          </RouterLink>
        </template>
        <template v-else>
          <menu class="flex flex-row space-x-20">
            <RouterLink to="/reg">Войти</RouterLink>
          </menu>
        </template>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { IconLogo, IconPerson } from '@/components/icons'
import { RouterLink } from 'vue-router'
import { useAppStore } from '@/store/app.store'
import { computed } from 'vue'

const store = useAppStore()
const isLoggedIn = computed(() => {
  return store.isLoggedIn
})
</script>
