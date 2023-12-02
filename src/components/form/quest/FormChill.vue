<template>
  <TheForm :data="{ title: 'Массовый отдых' }">
    <FormTextarea
      v-model="chillObjects"
      placeholder="Какие объекты для отдыха вы хотели бы иметь в шаговой доступности?"
    />

    <FormComponent> Какие виды активного или пассивного отдыха вы предпочитаете? </FormComponent>

    <template v-for="element in kindChillList" :key="element.value">
      <FormCheckbox v-model="kindChill" :value="element.value" :text="element.text" />
    </template>
    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormCheckbox, FormComponent, FormTextarea, TheForm } from '@/components/form/components'

import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit'): void }>()

const kindChillList = [
  { value: 'active', text: 'Активный отдых: Спорт, прогулки, велосипед' },
  { value: 'relax', text: 'Релаксация: Чтение, медитация, йога' },
  { value: 'natural', text: 'Природа: Пикники, прогулки в парке' },
  { value: 'culture', text: 'Культурный досуг: Театры, музеи, выставки' }
]

const kindChill = ref([])
const chillObjects = ref('')

const next = (): void => {
  emit('submit')
}
</script>
