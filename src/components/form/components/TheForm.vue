<template>
  <div class="flex flex-col items-center">
    <span class="mb-14 uppercase text-5xl font-['Arsenal']"> {{ data.title }}</span>
    <div class="flex flex-col items-center space-y-4">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
type FormSelectorItem = {
  key: string
  value: number | string | object
  name?: string
}

type FormConstructorComponent =
  | {
      type: 'selector'
      items: FormSelectorItem[]
      ref: number | string | object
    }
  | {
      type: 'button'
      onClick: Function
    }
  | {
      type: 'tab'
      items: FormSelectorItem[]
      ref: number | string | object
    }
  | {
      type: 'input'
      ref: string
    }
  | {
      type: 'checkbox'
      item: FormSelectorItem
      ref: string
    }

interface FormConstructorData {
  title: string
  components?: FormConstructorComponent[]
}

defineProps<{ data: FormConstructorData }>()
</script>
