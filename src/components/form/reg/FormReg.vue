<template>
  <TheForm :data="{ title: isReg ? 'Регистрация' : 'Авторизация' }">
    <FormInput v-if="isReg" v-model="name" placeholder="Имя" />
    <FormInput v-model="login" placeholder="Email" />
    <FormInput v-model="password" placeholder="Пароль" type="password" />

    <FormButton v-if="isReg" title="Зарегистрироваться" :action="onClickRegister" class="bg-accent text-primary" />
    <FormButton v-else title="Зарегистрироваться" :action="onClickLogin" class="bg-accent text-primary" />

    <div v-if="isReg" class="text-2xl font-light">
      <span>Уже есть аккаунт? </span>
      <span class="underline cursor-pointer" @click="isReg = false">Войти</span>
    </div>
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormInput, TheForm } from '@/components/form/components'
import type { LoginReqData, RegisterReqData } from '@/types'

import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'register', data: RegisterReqData): void
  (e: 'login', data: LoginReqData): void
}>()

const isReg = ref(true)
const name = ref('')
const login = ref('')
const password = ref('')

const onClickRegister = (): void => {
  emit('register', { name: name.value, email: login.value, password: password.value })
}

const onClickLogin = (): void => {
  emit('login', { email: login.value, password: password.value })
}
</script>
