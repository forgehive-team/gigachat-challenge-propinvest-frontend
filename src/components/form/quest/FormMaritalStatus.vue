<template>
  <TheForm :data="{ title: 'Семейное положение' }">
    <FormSelector v-model="selectedStatus" :items="martialStatusList" />
    <FormSelector v-model="hasChildern" :items="hasChildernList" />
    <FormInput
      v-if="hasChildern.value === 'yes'"
      v-model="childernNumber"
      placeholder="Количество детей"
      type="number"
    />
    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormInput, FormSelector, TheForm } from '@/components/form/components'

import type { FormSelectorItem } from '@/types'
import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit', data: unknown): void }>()

const martialStatusList: FormSelectorItem[] = [
  { key: '', name: 'Ваше семейное положение', disabled: true, value: '' },
  { key: 'married', name: 'Женат / замужем', value: 'married' },
  { key: 'single', name: 'Холост', value: 'single' }
]

const hasChildernList: FormSelectorItem[] = [
  { key: '', name: 'У вас есть дети?', disabled: true, value: '' },
  { key: 'yes', name: 'Да', value: 'yes' },
  { key: 'no', name: 'Нет', value: 'no' }
]

const selectedStatus = ref<FormSelectorItem>(martialStatusList[0])
const hasChildern = ref<FormSelectorItem>(hasChildernList[0])
const childernNumber = ref<number>(0)

const next = (): void => {
  const answer = {
    'Каков ваш семейный статус и есть ли дети?': [
      selectedStatus.value.key === 'married' ? 'Женат, ' : 'Холост, ',
      hasChildern.value.key === 'yes' ? `eсть ${childernNumber.value} детей` : 'нет детей'
    ].join('')
  }

  emit('submit', answer)
}
</script>
