<template>
  <TheForm :data="{ title: 'Семейное положение' }">
    <FormSelector v-model="martialStatus" :items="martialStatuses" />
    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormSelector, TheForm } from '@/components/form/components'

import type { FormSelectorItem } from '@/types'
import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit'): void }>()

const martialStatuses: FormSelectorItem[] = [
  {
    key: '',
    name: 'Выберите семейное положение',
    disabled: true,
    value: ''
  },
  {
    key: 'wtf-1',
    name: 'WTF-1',
    value: 'wtf-1-value'
  },
  {
    key: 'wtf-2',
    name: 'WTF-2',
    value: 'wtf-2-value'
  },
  {
    key: 'wtf-3',
    name: 'WTF-3',
    value: 'wtf-3-value'
  }
]

const martialStatus = ref<FormSelectorItem>(martialStatuses[0])

const next = (): void => {
  emit('submit')
}
</script>
