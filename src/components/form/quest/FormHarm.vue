<template>
  <TheForm :data="{ title: 'Вредные воздействия' }">
    <FormTextarea
      v-model="harmFactors"
      placeholder="Есть ли для вас неприемлемые факторы окружающей среды или соседства?"
    />

    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormTextarea, TheForm } from '@/components/form/components'

import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit'): void }>()

const harmFactors = ref('')

const next = (): void => {
  emit('submit')
}
</script>
