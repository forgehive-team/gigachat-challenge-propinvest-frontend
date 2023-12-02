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

import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit'): void }>()

const elevatorFeaturesList = [
  { value: 'layout', text: 'Планировка' },
  { value: 'decoration', text: 'Отделка' },
  { value: 'view', text: 'Вид из окон' }
]

const elevatorFeatures = ref([])

const next = (): void => {
  emit('submit')
}
</script>
