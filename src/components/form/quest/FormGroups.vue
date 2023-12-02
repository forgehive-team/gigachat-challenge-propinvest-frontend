<template>
  <TheForm :data="{ title: 'Входные группы' }">
    <FormComponent> Какие виды активного или пассивного отдыха вы предпочитаете? </FormComponent>

    <template v-for="element in kindChillList" :key="element.value">
      <FormCheckbox v-model="kindChill" :value="element.value" :text="element.text" />
    </template>

    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormCheckbox, FormComponent, TheForm } from '@/components/form/components'

import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit'): void }>()

const kindChillList = [
  { value: 'lift', text: 'Лифт из паркинга' },
  { value: 'safe', text: 'Система безопасности' },
  { value: 'wheelchair', text: 'Наличие колясочной' }
]

const kindChill = ref([])

const next = (): void => {
  emit('submit')
}
</script>
