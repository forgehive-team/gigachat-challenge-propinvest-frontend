<template>
  <TheForm :data="{ title: 'Парковка' }">
    <FormSelector v-model="useElectrocar" :items="useElectrocarList" />
    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormSelector, TheForm } from '@/components/form/components'
import type { FormSelectorItem, QuestResult } from '@/types'

import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit', data: QuestResult): void }>()

const useElectrocarList: FormSelectorItem[] = [
  { key: '', name: 'Используете ли Вы электромобиль и нуждаетесь ли в зарядной станции?', disabled: true, value: '' },
  { key: 'yes', name: 'Да', value: 'yes' },
  { key: 'no', name: 'Нет', value: 'no' }
]

const useElectrocar = ref<FormSelectorItem>(useElectrocarList[0])

const next = (): void => {
  const answer = {
    'Используете ли вы электромобиль и нуждаетесь ли в зарядной станции?':
      useElectrocar.value.key === 'yes' ? 'Да, использую и нуждаюсь' : 'Не использую электромобиль'
  }

  emit('submit', answer)
}
</script>
