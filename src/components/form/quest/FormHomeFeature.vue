<template>
  <TheForm :data="{ title: 'Потребительские особенности' }">
    <FormComponent>
      <span class="text-lg"> Какие характеристики квартир для вас наиболее значимы? </span>
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
  { value: 'планировка', text: 'Планировка' },
  { value: 'отделка', text: 'Отделка' },
  { value: 'вид из окон', text: 'Вид из окон' }
]

const elevatorFeatures = ref([])

const next = (): void => {
  const answer = {
    'Какие характеристики квартир для вас наиболее значимы?': elevatorFeatures.value.join(', ')
  }

  emit('submit', answer)
}
</script>
