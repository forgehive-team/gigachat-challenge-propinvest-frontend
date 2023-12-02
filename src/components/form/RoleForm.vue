<template>
  <TheForm :data="{ title: 'Выберите роль' }">
    <FormTab v-model="role" :items="roles" direction="row" />
    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormTab, TheForm } from '@/components/form/components'

import { ref } from 'vue'

interface TabItem {
  key: string
  name: string
}

const role = ref<TabItem>({ key: '', name: '' })

const roles = [
  {
    key: 'customer',
    name: 'Покупатель'
  },
  {
    key: 'seller',
    name: 'Продавец'
  }
]

const next = (): void => {
  alert(`Next fuck u, ${role.value}`)
}
</script>
