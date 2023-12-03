<template>
  <TheForm :data="{ title: 'Лифты' }">
    <FormComponent>
      <span class="text-lg"> Какие характеристики лифтов являются для вас ключевыми? </span>
    </FormComponent>

    <template v-for="element in elevatorFeaturesList" :key="element.value">
      <FormCheckbox v-model="elevatorFeatures" :value="element.value" :text="element.text" />
    </template>

    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormCheckbox, FormComponent, TheForm } from '@/components/form/components'

import type { QuestResult } from '@/types'
import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit', data: QuestResult): void }>()

const elevatorFeaturesList = [
  { value: 'быстродействие и надёжность', text: 'Быстродействие и надёжность: Высокая скорость, минимальные ожидания' },
  {
    value: 'безопасность и доступность',
    text: 'Безопасность и доступность: Системы безопасности, удобство для маломобильных граждан'
  },
  { value: 'простор и комфорт', text: 'Простор и комфорт: Большая вместимость, современный дизайн' },
  { value: 'технологичность', text: 'Технологичность: Смарт-системы управления, экраны информирования' }
]

const elevatorFeatures = ref([])

const next = (): void => {
  const answer = {
    'Какие характеристики лифтов являются для вас ключевыми?': elevatorFeatures.value.join(', ')
  }

  emit('submit', answer)
}
</script>
