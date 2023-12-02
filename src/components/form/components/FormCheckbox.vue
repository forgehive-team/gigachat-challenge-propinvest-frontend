<template>
  <FormComponent class="rounded-none select-none">
    <div class="flex items-center">
      <label v-if="text" :for="uuid" class="flex text-lg font-light lowercase cursor-pointer">
        <input :id="uuid" v-model="computedValue" :value="value" type="checkbox" class="checkbox__input" />
        <span class="checkbox__span"></span>
        <span>{{ text }}</span>
      </label>
    </div>
  </FormComponent>
</template>

<script setup lang="ts">
import { FormComponent } from '.'
import { computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'

const props = withDefaults(
  defineProps<{ modelValue: boolean | string | object; text?: string; value?: boolean | string | object }>(),
  { text: '', value: false }
)
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean | string | object): void
}>()

const uuid = uuidv4()

const computedValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<style lang="scss">
.checkbox {
  &__input {
    display: none;
  }

  &__input + &__span {
    @apply relative inline-block w-5 h-5 mt-2 mr-2 border-2 border-secondary rounded-md;

    content: '';
    min-width: 20px;
    min-height: 20px;
  }

  &__input + &__span:hover {
    @apply border-hover-950;
  }

  &__input + &__span {
    &::after {
      @apply absolute min-w-full min-h-full bg-accent border-2 border-accent transition-colors;
      content: '';
      background-image: url('@/assets/svg/icon-checked.svg');
      background-position: center center;
      background-repeat: no-repeat;
      opacity: 0;
    }
  }

  &__input:checked + &__span {
    @apply border-accent;

    &::after {
      opacity: 1;
    }
  }
}
</style>
