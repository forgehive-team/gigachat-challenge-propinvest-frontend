<template>
  <main class="container min-h-[calc(100dvh-270px)] mx-auto flex justify-center">
    <div class="mt-14 mb-24">
      <FormInterests @submit="++formStep" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { FormInterests } from '@/components/form'
import { ref } from 'vue'

const formStep = ref(1)
</script>
