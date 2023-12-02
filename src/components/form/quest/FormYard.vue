<template>
  <TheForm :data="{ title: 'Дворовое пространство' }">
    <template v-for="element in yardElements" :key="element.value">
      <FormCheckbox v-model="selectedElements" :value="element.value" :text="element.text" />
    </template>
    <FormSelector v-model="needSafe" :items="needSafeList" />
    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormCheckbox, FormSelector, TheForm } from '@/components/form/components'

import type { FormSelectorItem } from '@/types'
import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit'): void }>()

const yardElements = [
  { value: 'green', text: 'Зеленые зоны: Включает парки, сады и озеленение' },
  { value: 'fun', text: 'Игровые и спортивные площадки: Для детей и взрослых' },
  { value: 'chill', text: 'Отдых и инфраструктура: Места для прогулок, пикников и велопарковки' },
  { value: 'safe', text: 'Безопасность и комфорт: Wi-Fi, Видеонаблюдение,  освещение' }
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

const selectedElements = ref('')
const needSafe = ref<FormSelectorItem>(needSafeList[0])

const next = (): void => {
  emit('submit')
}
</script>
