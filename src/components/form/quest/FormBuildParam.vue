<template>
  <TheForm :data="{ title: 'Параметры застройки' }">
    <FormSelector v-model="prefer" :items="preferList" />

    <FormTextarea
      v-model="important"
      placeholder="Насколько для вас важен уровень озеленения и наличие общественных пространств?"
    />

    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormSelector, FormTextarea, TheForm } from '@/components/form/components'
import type { FormSelectorItem, QuestResult } from '@/types'

import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit', data: QuestResult): void }>()

const preferList: FormSelectorItem[] = [
  { key: '', name: 'Какие жилые комплексы вы предпочитаете?', disabled: true, value: '' },
  { key: 'little', name: 'Компактные', value: 'little' },
  { key: 'big', name: 'Просторные', value: 'big' }
]

const prefer = ref<FormSelectorItem>(preferList[0])
const important = ref('')

const next = (): void => {
  const answer = {
    'Какие жилые комплексы вы предпочитаете?':
      prefer.value.key === 'little' ? 'Предпочитаю, компактные комплексы' : 'Предпочитаю, просторные комплексы',
    'Насколько для вас важен уровень озеленения и наличие общественных пространств?': important.value
  }

  emit('submit', answer)
}
</script>
