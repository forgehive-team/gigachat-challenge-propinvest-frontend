<template>
  <TheForm :data="{ title: 'Безопасность' }">
    <FormSelector v-model="needSafe" :items="needSafeList" />
    <FormTextarea
      v-model="extraSafe"
      placeholder="Какие дополнительные меры безопасности вы считаете необходимыми в жилом комплексе?"
    />
    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormSelector, FormTextarea, TheForm } from '@/components/form/components'
import type { FormSelectorItem, QuestResult } from '@/types'

import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit', data: QuestResult): void }>()

const needSafeList: FormSelectorItem[] = [
  {
    key: '',
    name: 'Насколько важны для вас такие аспекты безопасности, как консьерж, огороженная территория, видеонаблюдение?',
    disabled: true,
    value: ''
  },
  { key: 'very-important', name: 'Очень важно', value: 'very-important' },
  { key: 'neutral', name: 'Нейтрально', value: 'neutral' },
  { key: 'non-important', name: 'Неважно', value: 'non-important' }
]

const needSafe = ref<FormSelectorItem>(needSafeList[0])
const extraSafe = ref('')

const next = (): void => {
  const answer = {
    'Насколько важны для вас такие аспекты безопасности, как консьерж, огороженная территория, видеонаблюдение?':
      needSafe.value.name,
    'Какие дополнительные меры безопасности вы считаете необходимыми в жилом комплексе?': extraSafe.value
  }

  emit('submit', answer)
}
</script>
