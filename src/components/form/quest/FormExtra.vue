<template>
  <TheForm :data="{ title: 'Дополнительные вопросы' }">
    <FormTextarea
      v-model="hobbies"
      placeholder="Какие у вас хобби и интересы, которые могут повлиять на выбор жилья?"
    />

    <FormSelector v-model="prefers" :items="prefersList" />

    <FormTextarea
      v-model="requirements"
      placeholder="Есть ли у вас особые требования к жилой недвижимости, например, необходимость наличия рабочего кабинета или комнаты для хобби?"
    />
    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormSelector, FormTextarea, TheForm } from '@/components/form/components'
import type { FormSelectorItem, QuestResult } from '@/types'

import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit', data: QuestResult): void }>()

const prefersList: FormSelectorItem[] = [
  {
    key: '',
    name: 'Где бы Вы предпочли жить?',
    disabled: true,
    value: ''
  },
  { key: 'downtown', name: 'Центр города', value: 'downtown' },
  { key: 'suburb', name: 'Тихий пригород', value: 'suburb' }
]

const prefers = ref<FormSelectorItem>(prefersList[0])
const hobbies = ref('')
const requirements = ref('')

const next = (): void => {
  const answer = {
    'Какие у вас хобби и интересы, которые могут повлиять на выбор жилья?': hobbies.value,
    'Где бы Вы предпочли жить?':
      prefers.value.key === 'downtown' ? 'Я бы предпочел жить в центре города' : 'Я бы предпочел жить в пригороде',
    'Есть ли у вас особые требования к жилой недвижимости, например, необходимость наличия рабочего кабинета или комнаты для хобби?':
      requirements.value
  }

  emit('submit', answer)
}
</script>
