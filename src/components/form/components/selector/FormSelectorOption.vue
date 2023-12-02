<template>
  <li
    :class="{ 'cursor-pointer': !item.disabled, 'text-disabled-500': item.disabled }"
    class="w-full py-5 border-t border-hover-500 first-of-type:border-secondary"
  >
    <span> {{ item.name }} </span>
  </li>
</template>

<script setup lang="ts">
import type { FormSelectorItem } from '@/types'

defineProps<{ item: FormSelectorItem }>()
</script>
