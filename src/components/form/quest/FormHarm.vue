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

const emit = defineEmits<{ (e: 'submit', data: unknown): void }>()

const harmFactors = ref('')

const next = (): void => {
  const answer = {
    'Есть ли для вас неприемлемые факторы окружающей среды или соседства?': harmFactors.value
  }

  emit('submit', answer)
}
</script>
