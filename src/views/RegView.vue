<template>
  <main class="container min-h-[calc(100dvh-270px)] mx-auto flex justify-center">
    <div class="mt-14 mb-24">
      <FormReg v-if="formStep === 1" @submit="registate" />
      <FormRole v-else-if="formStep === 2" @submit="chooseRole" />
      <FormProfile v-else-if="formStep === 3" @submit="fillProfile" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { FormProfile, FormReg, FormRole } from '@/components/form/reg'

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const formStep = ref(1)

const registate = (): void => {
  alert('VZLOV ZHOPY - DONE')
  ++formStep.value
}

const chooseRole = (): void => {
  alert('VYBOR ZHOPY - DONE')
  ++formStep.value
}

const fillProfile = (): void => {
  alert('ZAPLNENIIE ZHOPY - DONE')
  router.replace('/questionnaire')
}
</script>
