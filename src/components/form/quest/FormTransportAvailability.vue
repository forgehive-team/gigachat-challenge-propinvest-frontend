<template>
  <TheForm :data="{ title: 'Транспортная доступность' }">
    <FormSelector v-model="important" :items="importantList" />
    <FormSelector v-model="kindTransport" :items="kindTransportList" />
    <FormSelector v-model="carNumber" :items="carNumberList" />

    <FormButton title="Далее" :action="registate" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormSelector, TheForm } from '@/components/form/components'

import type { FormSelectorItem } from '@/types'
import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit'): void }>()

const importantList: FormSelectorItem[] = [
  { key: '', name: 'Важна ли для Вас близость к основным транспортным узлам?', disabled: true, value: '' },
  { key: 'yes', name: 'Да', value: 'yes' },
  { key: 'no', name: 'Нет', value: 'no' }
]

const kindTransportList: FormSelectorItem[] = [
  { key: '', name: 'Какой вид транспорта Вы используете?', disabled: true, value: '' },
  { key: 'private', name: 'Собственный автомобиль', value: 'private' },
  { key: 'public', name: 'Общественный транспорт', value: 'public' }
]

const carNumberList: FormSelectorItem[] = [
  { key: '', name: 'Сколько у Вас автомобилей?', disabled: true, value: '' },
  { key: '1', name: '1', value: '1' },
  { key: '2', name: '2', value: '2' },
  { key: '3', name: '3', value: '3' },
  { key: 'public', name: '3 +', value: '3+' }
]

const important = ref<FormSelectorItem>(importantList[0])
const kindTransport = ref<FormSelectorItem>(kindTransportList[0])
const carNumber = ref<FormSelectorItem>(carNumberList[0])

const registate = (): void => {
  emit('submit')
}
</script>
