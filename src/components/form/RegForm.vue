<template>
  <TheForm :data="{ title: 'Регистрация' }">
    <FormInput v-model="phone" placeholder="Номер телефона" />
    <FormInput v-model="login" placeholder="Email" />
    <FormButton title="Зарегистрироваться" :action="registate" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormInput, TheForm } from '@/components/form/components'

import { ref } from 'vue'

const phone = ref('')
const login = ref('')

const registate = (): void => {
  alert('Fuck u')
}
</script>
