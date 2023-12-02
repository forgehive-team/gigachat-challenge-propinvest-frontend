<template>
  <TheForm :data="{ title: 'Транспортная доступность' }">
    <FormSelector v-model="important" :items="importantList" />
    <FormSelector v-model="kindTransport" :items="kindTransportList" />
    <FormSelector v-model="carNumber" :items="carNumberList" />

    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormSelector, TheForm } from '@/components/form/components'

import type { FormSelectorItem } from '@/types'
import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit', data: unknown): void }>()

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
  { key: 'more-three', name: '3 +', value: 'more-three' }
]

const important = ref<FormSelectorItem>(importantList[0])
const kindTransport = ref<FormSelectorItem>(kindTransportList[0])
const carNumber = ref<FormSelectorItem>(carNumberList[0])

const next = (): void => {
  const answer = {
    'Важна ли для Вас близость к основным транспортным узлам?': important.value.name,
    'Вы пользуетесь личным автомобилем или предпочитаете общественный транспорт?':
      kindTransport.value.key === 'public' ? 'Предпочитаю общественный транспорт' : 'Предпочитаю личный автомобиль',
    'Сколько у вас автомобилей?':
      carNumber.value.key === 'more-three' ? 'У меня больше трех автомобилей' : carNumber.value.key
  }

  emit('submit', answer)
}
</script>
