<template>
  <main class="container min-h-[calc(100dvh-270px)] mx-auto flex justify-center">
    <div class="mt-14 mb-24">
      <FormMaritalStatus v-if="formStep === 1" @submit="++formStep" />
      <FormTransportAvailability v-else-if="formStep === 2" @submit="++formStep" />
      <FormParking v-else-if="formStep === 3" @submit="++formStep" />
      <FormInfrastructure v-else-if="formStep === 4" @submit="++formStep" />
      <FormSport v-else-if="formStep === 5" @submit="++formStep" />
      <FormYard v-else-if="formStep === 6" @submit="++formStep" />
      <FormSafe v-else-if="formStep === 7" @submit="++formStep" />
      <FormChill v-else-if="formStep === 8" @submit="++formStep" />
      <FormHarm v-else-if="formStep === 9" @submit="++formStep" />
      <FormArchitecture v-else-if="formStep === 10" @submit="++formStep" />
      <FormGroups v-else-if="formStep === 11" @submit="++formStep" />
    </div>
  </main>
</template>

<script setup lang="ts">
import {
  FormArchitecture,
  FormChill,
  FormGroups,
  FormHarm,
  FormInfrastructure,
  FormMaritalStatus,
  FormParking,
  FormSafe,
  FormSport,
  FormTransportAvailability,
  FormYard
} from '@/components/form/quest'

import { ref } from 'vue'

const formStep = ref(11)
</script>
