<template>
  <FormComponent class="border border-secondary">
    <textarea
      v-model="value"
      :disabled="disabled"
      :placeholder="placeholder"
      class="w-full h-36 px-7 py-4 outline-none font-light resize-none"
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
