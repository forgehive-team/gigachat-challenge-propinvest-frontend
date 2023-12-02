<template>
  <FormComponent class="border transition-all">
    <button class="w-full h-16 text-lg font-medium uppercase" @click="onClick">
      {{ title }}
    </button>
  </FormComponent>
</template>

<script setup lang="ts">
import { FormComponent } from '.'

const props = defineProps<{ title: string; action: Function; value?: number | string | object }>()

const onClick = (): void => {
  if (props.value) {
    props.action(props.value)
  } else {
    props.action()
  }
}
</script>
