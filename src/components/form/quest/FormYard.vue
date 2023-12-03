<template>
  <TheForm :data="{ title: 'Дворовое пространство' }">
    <FormComponent>
      <span class="text-lg"> Какие элементы дворового пространства вы считаете обязательными? </span>
    </FormComponent>

    <template v-for="element in yardElements" :key="element.value">
      <FormCheckbox v-model="selectedElements" :value="element.value" :text="element.text" />
    </template>

    <FormSelector v-model="needSafe" :items="needSafeList" />
    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormCheckbox, FormComponent, FormSelector, TheForm } from '@/components/form/components'
import type { FormSelectorItem, QuestResult } from '@/types'

import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit', data: QuestResult): void }>()

const yardElements = [
  { value: 'зеленые зоны', text: 'Зеленые зоны: Включает парки, сады и озеленение' },
  { value: 'игровые и спортивные площадки', text: 'Игровые и спортивные площадки: Для детей и взрослых' },
  { value: 'отдых и инфраструктура', text: 'Отдых и инфраструктура: Места для прогулок, пикников и велопарковки' },
  { value: 'безопасность и комфорт', text: 'Безопасность и комфорт: Wi-Fi, Видеонаблюдение,  освещение' }
]

const needSafeList: FormSelectorItem[] = [
  {
    key: '',
    name: 'Ищете ли вы жильё с безопасными и удобными зонами для детей или пожилых родственников?',
    disabled: true,
    value: ''
  },
  { key: 'yes', name: 'Да', value: 'yes' },
  { key: 'no', name: 'Нет', value: 'no' }
]

const selectedElements = ref([])
const needSafe = ref<FormSelectorItem>(needSafeList[0])

const next = (): void => {
  const answer = {
    'Какие элементы дворового пространства вы считаете обязательными?': selectedElements.value.join(', '),
    'Ищете ли вы жильё с безопасными и удобными зонами для детей или пожилых родственников?':
      needSafe.value.key === 'yes' ? 'Да, ищу' : 'Нет, не ищу'
  }

  emit('submit', answer)
}
</script>
