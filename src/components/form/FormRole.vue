<template>
  <TheForm :data="{ title: 'Выберите роль' }">
    <FormTab v-model="role" :items="roles" />
    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormTab, TheForm } from '@/components/form/components'

import type { FormTabItem } from '@/types'
import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit'): void }>()

const roles: FormTabItem[] = [
  {
    key: 'customer',
    name: 'Покупатель'
  },
  {
    key: 'seller',
    name: 'Продавец'
  }
]

const role = ref<FormTabItem>({ key: '', name: '' })

const next = (): void => {
  emit('submit')
}
</script>
