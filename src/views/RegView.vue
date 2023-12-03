<template>
  <main class="container min-h-[calc(100dvh-270px)] mx-auto flex justify-center">
    <div class="mt-14 mb-24">
      <FormReg v-if="formStep === 1" @register="register" @login="login" />
    </div>
  </main>
</template>

<script setup lang="ts">
import type { LoginReqData, RegisterReqData } from '@/types'

import { FormReg } from '@/components/form/reg'
import { api } from '@/api'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const formStep = ref(1)

const register = (data: RegisterReqData): void => {
  api.auth.register(data).then(() => router.push('/account'))
}

const login = (data: LoginReqData): void => {
  api.auth.login(data).then(() => router.push('/account'))
}
</script>
