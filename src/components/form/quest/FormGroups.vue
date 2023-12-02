<template>
  <TheForm :data="{ title: 'Входные группы' }">
    <FormComponent>
      <span class="text-lg"> Какие удобства в подъезде для вас важны? </span>
    </FormComponent>

    <template v-for="element in kindChillList" :key="element.value">
      <FormCheckbox v-model="kindChill" :value="element.value" :text="element.text" />
    </template>

    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormCheckbox, FormComponent, TheForm } from '@/components/form/components'

import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit', data: unknown): void }>()

const kindChillList = [
  { value: 'лифт из паркинга', text: 'Лифт из паркинга' },
  { value: 'система безопасности', text: 'Система безопасности' },
  { value: 'наличие колясочной', text: 'Наличие колясочной' }
]

const kindChill = ref([])

const next = (): void => {
  const answer = {
    'Какие удобства в подъезде для вас важны?': kindChill.value.join(', ')
  }

  emit('submit', answer)
}
</script>
