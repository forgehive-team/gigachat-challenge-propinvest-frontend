<template>
  <main class="container min-h-[calc(100dvh-246px)] mx-auto mb-24">
    <div class="mt-52 w-min relative">
      <h1 class="font-custom font-bold text-[109px] leading-none text-secondary">НЕДВИЖИМОСТЬ</h1>
      <div class="w-min ml-auto">
        <h2 class="font-custom font-bold text-[41px] text-secondary whitespace-nowrap pr-1">
          КОТОРАЯ НУЖНА ИМЕННО ВАМ
        </h2>
        <p class="font-sans font-light text-2xl text-secondary mt-12">
          Быстро подобрать идеальный вариант под любые нужды теперь легко. Система на основе Giga Chat сделает все за
          вас.
        </p>
        <button
          class="text-[18px] font-medium leading-5 tracking-wide text-center py-6 px-12 bg-accent text-white rounded mt-14"
          @click="goToRegistration"
        >
          РЕГИСТРАЦИЯ
        </button>
      </div>
      <IconHomeCircle class="circle" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { IconHomeCircle } from '@/components/icons'

const goToRegistration = (): void => {
  alert('Опять на непонятных сайтах регаешься да')
}
</script>

<style lang="scss" scoped>
.circle {
  position: absolute;
  z-index: -1;
  top: 50%;
  transform: translateY(-50%);
  right: -17rem;
}
</style>
