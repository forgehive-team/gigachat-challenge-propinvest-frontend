<template>
  <FormComponent class="border border-secondary">
    <input
      v-model="value"
      :disabled="disabled"
      :placeholder="placeholder"
      class="w-full px-7 py-4 outline-none font-light"
    />
  </FormComponent>
</template>

<script setup lang="ts">
import { FormComponent } from '.'
import { computed } from 'vue'

const props = withDefaults(defineProps<{ modelValue: string; disabled?: boolean; placeholder?: string }>(), {
  disabled: false
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>
