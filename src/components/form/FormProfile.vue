<template>
  <TheForm :data="{ title: 'Выберите роль' }">
    <FormInput v-model="secondName" placeholder="Фамилия" />
    <FormInput v-model="firstName" placeholder="Имя" />
    <FormInput v-model="middleName" placeholder="Отчество" />
    <FormInput v-model="birthday" placeholder="Дата рождения" />
    <FormTab v-model="sex" :items="sexes" direction="row" />
    <FormInput v-model="citizenship" placeholder="Гражданство" />
    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormInput, FormTab, TheForm } from '@/components/form/components'

import type { FormTabItem } from '@/types'
import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit'): void }>()

const sexes: FormTabItem[] = [
  {
    key: 'male',
    name: 'Мужчина'
  },
  {
    key: 'female',
    name: 'Женщина'
  }
]

const firstName = ref('')
const secondName = ref('')
const middleName = ref('')
const birthday = ref('')
const sex = ref<FormTabItem>({ key: '', name: '' })
const citizenship = ref('')

const next = (): void => {
  emit('submit')
}
</script>
