<template>
  <FormComponent class="border border-secondary select-none">
    <FormSelectorButton :title="value.name" :is-open="open" @click="onClickOpen" />

    <FormSelectorOptions v-show="open">
      <template v-for="item in items" :key="item.key">
        <FormSelectorOption :item="item" @click="!item.disabled && onClickSelect(item)" />
      </template>
    </FormSelectorOptions>
  </FormComponent>
</template>

<script setup lang="ts">
import { FormSelectorButton, FormSelectorOption, FormSelectorOptions } from './'
import { computed, ref } from 'vue'

import { FormComponent } from '../'
import type { FormSelectorItem } from '@/types'

const props = defineProps<{ modelValue: FormSelectorItem; items: FormSelectorItem[] }>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: FormSelectorItem): void
}>()

const open = ref(false)

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const onClickOpen = (): void => {
  open.value = !open.value
}

const onClickSelect = (selectedItem: FormSelectorItem): void => {
  value.value = selectedItem
  onClickOpen()
}
</script>
