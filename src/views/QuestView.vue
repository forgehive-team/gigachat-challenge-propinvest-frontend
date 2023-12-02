<template>
  <main class="container min-h-[calc(100dvh-270px)] mx-auto flex justify-center">
    <div class="mt-14 mb-24">
      <FormMaritalStatus @submit="++formStep" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { FormMaritalStatus } from '@/components/form/quest'
import { ref } from 'vue'

const formStep = ref(1)
</script>
