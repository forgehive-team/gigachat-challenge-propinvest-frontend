<template>
  <FormComponent class="flex gap-4" :style="{ flexDirection: direction === 'row' ? 'row' : 'column' }">
    <template v-for="item in items" :key="item.key">
      <FormButton
        :title="item.name"
        :action="selectTab"
        :value="item"
        class="border-secondary hover:bg-hover-500"
        :class="{
          'bg-secondary text-primary': value?.key === item.key
        }"
      />
    </template>
  </FormComponent>
</template>

<script setup lang="ts">
import { FormButton, FormComponent } from '.'

import type { FormTabItem } from '@/types'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{ modelValue: FormTabItem; items?: FormTabItem[]; direction?: 'row' | 'col' }>(),
  {
    direction: 'col'
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: FormTabItem): void
}>()

const selectTab = (selectedTab: FormTabItem): void => {
  value.value = selectedTab
}

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>
