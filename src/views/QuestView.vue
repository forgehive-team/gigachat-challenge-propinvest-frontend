<template>
  <main class="container min-h-[calc(100dvh-270px)] mx-auto flex justify-center">
    <div class="mt-14 mb-24">
      <FormMaritalStatus v-if="formStep === 1" @submit="nextStep" />
      <FormTransportAvailability v-else-if="formStep === 2" @submit="nextStep" />
      <FormParking v-else-if="formStep === 3" @submit="nextStep" />
      <FormInfrastructure v-else-if="formStep === 4" @submit="nextStep" />
      <FormSport v-else-if="formStep === 5" @submit="nextStep" />
      <FormYard v-else-if="formStep === 6" @submit="nextStep" />
      <FormSafe v-else-if="formStep === 7" @submit="nextStep" />
      <FormChill v-else-if="formStep === 8" @submit="nextStep" />
      <FormHarm v-else-if="formStep === 9" @submit="nextStep" />
      <FormArchitecture v-else-if="formStep === 10" @submit="nextStep" />
      <FormGroups v-else-if="formStep === 11" @submit="nextStep" />
      <FormElevator v-else-if="formStep === 12" @submit="nextStep" />
      <FormDisabilities v-else-if="formStep === 13" @submit="nextStep" />
      <FormHomeFeature v-else-if="formStep === 14" @submit="nextStep" />
      <FormClientService v-else-if="formStep === 15" @submit="nextStep" />
      <FormBuildParam v-else-if="formStep === 16" @submit="nextStep" />
      <FormExtra v-else-if="formStep === 17" @submit="nextStep" />
    </div>
  </main>
</template>

<script setup lang="ts">
import {
  FormArchitecture,
  FormBuildParam,
  FormChill,
  FormClientService,
  FormDisabilities,
  FormElevator,
  FormExtra,
  FormGroups,
  FormHarm,
  FormHomeFeature,
  FormInfrastructure,
  FormMaritalStatus,
  FormParking,
  FormSafe,
  FormSport,
  FormTransportAvailability,
  FormYard
} from '@/components/form/quest'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import type { QuestResult } from '@/types'
import { api } from '@/api'

const route = useRoute()
const router = useRouter()

const formStep = ref(1)
const answers = ref<QuestResult>({})

const nextStep = async (data: QuestResult): Promise<void> => {
  answers.value = {
    ...answers.value,
    ...data
  }

  localStorage.setItem('quest_result', JSON.stringify(answers.value))

  if (formStep.value === 17) {
    await api.quest.submitQuest(answers.value).then(() => router.push('/account'))
  }

  ++formStep.value
  router.push({ path: '/quest', query: { step: formStep.value } })
}

onMounted(() => {
  const step = parseInt(route.query['step']?.toString() || '1')
  formStep.value = step > 17 || step < 1 ? 1 : step

  if (formStep.value === 1) {
    localStorage.setItem('quest_result', '{}')
  }

  const localStorageData = localStorage.getItem('quest_result')
  if (localStorageData) {
    answers.value = JSON.parse(localStorageData)
  }
})
</script>
