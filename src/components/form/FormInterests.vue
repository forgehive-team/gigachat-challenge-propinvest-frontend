<template>
  <TheForm :data="{ title: 'Регистрация' }">
    <FormTextarea v-model="interests" placeholder="Введите ваши предпочтения" />
    <FormCheckbox
      v-model="agree"
      text="Я принимаю правила Я принимаю правила Я принимаю правила Я принимаю правила Я принимаю правила"
    />
    <FormButton title="Готово" :action="registate" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormCheckbox, FormTextarea, TheForm } from '@/components/form/components'

import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit'): void }>()

const interests = ref('')
const agree = ref(false)

const registate = (): void => {
  emit('submit')
}
</script>
