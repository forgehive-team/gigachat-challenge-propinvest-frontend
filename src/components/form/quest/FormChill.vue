<template>
  <TheForm :data="{ title: 'Массовый отдых' }">
    <FormTextarea
      v-model="chillObjects"
      placeholder="Какие объекты для отдыха вы хотели бы иметь в шаговой доступности?"
    />

    <FormComponent>
      <span class="text-lg"> Какие виды активного или пассивного отдыха вы предпочитаете? </span>
    </FormComponent>

    <template v-for="element in kindChillList" :key="element.value">
      <FormCheckbox v-model="kindChill" :value="element.value" :text="element.text" />
    </template>
    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormCheckbox, FormComponent, FormTextarea, TheForm } from '@/components/form/components'

import type { QuestResult } from '@/types'
import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit', data: QuestResult): void }>()

const kindChillList = [
  { value: 'активный отдых', text: 'Активный отдых: Спорт, прогулки, велосипед' },
  { value: 'релаксация', text: 'Релаксация: Чтение, медитация, йога' },
  { value: 'природа', text: 'Природа: Пикники, прогулки в парке' },
  { value: 'культурный досуг', text: 'Культурный досуг: Театры, музеи, выставки' }
]

const kindChill = ref([])
const chillObjects = ref('')

const next = (): void => {
  const answer = {
    'Какие дополнительные меры безопасности вы считаете необходимыми в жилом комплексе?': chillObjects.value,
    'Какие виды активного или пассивного отдыха вы предпочитаете?': kindChill.value.join(', ')
  }

  emit('submit', answer)
}
</script>
