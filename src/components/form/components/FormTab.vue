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

import { computed } from 'vue'

interface TabItem {
  key: string
  name: string
}

const props = withDefaults(defineProps<{ modelValue: TabItem; items?: TabItem[]; direction?: 'row' | 'col' }>(), {
  direction: 'col'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: TabItem): void
}>()

const selectTab = (selectedTab: TabItem): void => {
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
