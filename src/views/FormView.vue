<template>
  <main class="container min-h-[calc(100dvh-270px)] mx-auto flex justify-center">
    <div class="mt-14 mb-24">
      <!-- <FormReg v-if="formStep === 1" @submit="++formStep" />
      <FormRole v-else-if="formStep === 2" @submit="++formStep" />
      <FormProfile v-else-if="formStep === 3" @submit="++formStep" />
      <FormMaritalStatus v-else-if="formStep === 4" @submit="++formStep" /> -->
      <FormInterests @submit="++formStep" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { FormInterests, FormMaritalStatus, FormProfile, FormReg, FormRole } from '@/components/form'

import { ref } from 'vue'

const formStep = ref(1)
</script>
