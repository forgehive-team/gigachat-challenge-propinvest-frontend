<template>
  <div class="px-[30px] py-[25px] bg-card rounded flex flex-col">
    <h5 v-if="title" class="mb-4 text-[34px] leading-none">{{ title }}</h5>
    <div v-for="(field, i) in fields" :key="i" class="flex w-full field">
      <span class="mt-2 text-secondary text-2xl font-light flex-shrink-0">{{ field.name }}</span>
      <span class="w-full border-b border-solid border-[#AFBCD0]"></span>
      <span class="mt-2 text-secondary text-2xl font-light flex-shrink-0">{{ field.value }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  fields: Array<{ name: string; value: string }>
}>()
</script>

<style lang="scss" scoped>
.field {
  &:last-of-type {
    margin-top: auto !important;
  }
}
</style>
