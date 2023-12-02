<template>
  <main class="container min-h-[calc(100dvh-270px)] mx-auto flex justify-center">
    <div class="mt-14 mb-24">
      <RegForm v-if="formStep === 1" @submit="++formStep" />
      <RoleForm v-else-if="formStep === 2" @submit="++formStep" />
      <ProfileForm v-else-if="formStep === 3" @submit="++formStep" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ProfileForm, RegForm, RoleForm } from '@/components/form'

import { ref } from 'vue'

const formStep = ref(1)
</script>
