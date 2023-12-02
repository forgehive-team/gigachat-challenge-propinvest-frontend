<template>
  <footer class="flex justify-center h-40 bg-dark">
    <div class="container my-7 flex justify-between items-center">
      <div class="self-start text-primary">
        <IconLogo />
      </div>

      <div class="flex space-x-32 xl:space-x-56 text-primary font-light text-xl">
        <menu class="flex space-x-20">
          <ul class="space-y-3">
            <li><a>Проекты</a></li>
            <li><a>Лоты</a></li>
            <li><a>О компании</a></li>
          </ul>
          <ul class="space-y-3">
            <li><a>Контакты</a></li>
            <li><a>Партнеры</a></li>
            <li><a>Инвестиции</a></li>
          </ul>
          <ul class="space-y-3">
            <li><a>Клиентам</a></li>
            <li><a>Поддержка</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </menu>

        <div class="flex flex-col items-end">
          <span class="text-2xl">+7 (910) 245-24-55</span>
          <span class="mt-4 text-lg underline uppercase">Заказать звонок</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { IconLogo } from './icons'
</script>
