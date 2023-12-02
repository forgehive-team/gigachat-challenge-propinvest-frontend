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

const emit = defineEmits<{ (e: 'submit'): void }>()

const favoriteArchList = [
  { value: 'modern', text: 'Современный стиль' },
  { value: 'clasic', text: 'Классический стиль' },
  { value: 'eco', text: 'Экологичный дизайн' },
  { value: 'inovation', text: 'Инновационные решения' },
  { value: 'none', text: 'Нет предпочтений' }
]

const favoriteArch = ref([])

const next = (): void => {
  emit('submit')
}
</script>
