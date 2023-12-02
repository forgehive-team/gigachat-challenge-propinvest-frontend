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
