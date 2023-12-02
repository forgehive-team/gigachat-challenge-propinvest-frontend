<template>
  <TheForm :data="{ title: 'Архитектура, фасады' }">
    <FormComponent>
      <span class="text-lg"> Какие архитектурные особенности и элементы фасада для вас предпочтительны? </span>
    </FormComponent>

    <template v-for="element in favoriteArchList" :key="element.value">
      <FormCheckbox v-model="favoriteArch" :value="element.value" :text="element.text" />
    </template>
    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormCheckbox, FormComponent, TheForm } from '@/components/form/components'

import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit', data: unknown): void }>()

const favoriteArchList = [
  { value: 'cовременный стиль', text: 'Современный стиль' },
  { value: 'классический стиль', text: 'Классический стиль' },
  { value: 'экологичный дизайн', text: 'Экологичный дизайн' },
  { value: 'инновационные решения', text: 'Инновационные решения' },
  { value: 'нет предпочтений', text: 'Нет предпочтений' }
]

const favoriteArch = ref([])

const next = (): void => {
  const answer = {
    'Какие архитектурные особенности и элементы фасада для вас предпочтительны?': favoriteArch.value.join(', ')
  }

  emit('submit', answer)
}
</script>
