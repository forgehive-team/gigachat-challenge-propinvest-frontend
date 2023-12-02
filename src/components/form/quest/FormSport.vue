<template>
  <TheForm :data="{ title: 'Объекты спорта' }">
    <FormTextarea v-model="favoriteSport" placeholder="Какие виды спорта Вы предпочитаете?" />
    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormTextarea, TheForm } from '@/components/form/components'

import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit'): void }>()

const favoriteSport = ref('')

const next = (): void => {
  emit('submit')
}
</script>
