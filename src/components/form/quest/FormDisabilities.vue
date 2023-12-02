<template>
  <TheForm :data="{ title: 'Среда для маломобильных граждан' }">
    <FormSelector v-model="disabilities" :items="disabilitiesList" />
    <FormTextarea
      v-if="disabilities.value === 'yes'"
      v-model="description"
      placeholder="Какие удобства им необходимы?"
      type="number"
    />
    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormSelector, FormTextarea, TheForm } from '@/components/form/components'

import type { FormSelectorItem } from '@/types'
import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit'): void }>()

const disabilitiesList: FormSelectorItem[] = [
  {
    key: '',
    name: 'Есть ли в Вашей семье люди с ограниченными возможностями?',
    disabled: true,
    value: ''
  },
  { key: 'yes', name: 'Да', value: 'yes' },
  { key: 'no', name: 'Нет', value: 'no' }
]

const disabilities = ref<FormSelectorItem>(disabilitiesList[0])
const description = ref('')

const next = (): void => {
  emit('submit')
}
</script>
