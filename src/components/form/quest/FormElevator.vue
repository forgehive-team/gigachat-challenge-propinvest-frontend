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

import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit'): void }>()

const elevatorFeaturesList = [
  { value: 'fast', text: 'Быстродействие и надёжность: Высокая скорость, минимальные ожидания' },
  { value: 'safe', text: 'Безопасность и доступность: Системы безопасности, удобство для маломобильных граждан' },
  { value: 'сomfort', text: 'Простор и комфорт: Большая вместимость, современный дизайн' },
  { value: 'tech', text: 'Технологичность: Смарт-системы управления, экраны информирования' }
]

const elevatorFeatures = ref([])

const next = (): void => {
  emit('submit')
}
</script>
