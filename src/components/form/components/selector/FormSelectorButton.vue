<template>
  <FormComponent class="flex justify-between items-center px-7 cursor-pointer">
    <span class="font-light">{{ title }}</span>
    <IconArrowDownSolid :class="{ 'rotate-180': isOpen }" class="min-w-[1rem] w-4 transition-transform" />
  </FormComponent>
</template>

<script setup lang="ts">
import { FormComponent } from '../'
import { IconArrowDownSolid } from '@/components/icons'

withDefaults(defineProps<{ title: string; isOpen?: boolean }>(), {
  isOpen: false
})
</script>
