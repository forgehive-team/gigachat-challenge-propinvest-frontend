<template>
  <header class="flex justify-center py-10">
    <div class="container flex justify-between items-center">
      <div class="self-start text-secondary">
        <IconLogo />
      </div>

      <div class="flex space-x-32 xl:space-x-56 text-secondary font-light text-xl">
        <menu class="flex flex-row space-x-20">
          <RouterLink to="/projects">Проекты</RouterLink>
          <a>Лоты</a>
          <RouterLink to="/">О компании</RouterLink>
          <a>Контакты</a>
        </menu>

        <div class="flex flex-col text-accent">
          <IconPerson />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { IconLogo, IconPerson } from '@/components/icons'
import { RouterLink } from 'vue-router'
</script>
