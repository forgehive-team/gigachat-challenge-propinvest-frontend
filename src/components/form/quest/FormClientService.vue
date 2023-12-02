<template>
  <TheForm :data="{ title: 'Клиентский сервис' }">
    <FormComponent>
      <span class="text-lg"> Какие дополнительные услуги от застройщика могли бы вас заинтересовать? </span>
    </FormComponent>

    <template v-for="service in servicesList" :key="service.value">
      <FormCheckbox v-model="services" :value="service.value" :text="service.text" />
    </template>

    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormCheckbox, FormComponent, TheForm } from '@/components/form/components'

import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit'): void }>()

const servicesList = [
  {
    value: 'services',
    text: 'Услуги консьержа и безопасности: Предоставление услуг консьержа, охраны, видеонаблюдения'
  },
  {
    value: 'tech',
    text: 'Техническое обслуживание: Регулярный ремонт и техническое обслуживание общих пространств и инженерных систем'
  },
  { value: 'support', text: 'Службы поддержки: Уборка, садоводство, управление мусором и рециклинг' },
  {
    value: 'comfort',
    text: 'Дополнительные удобства: Фитнес-центр, детские клубы, прачечная, салоны красоты в пределах жилого комплекса'
  }
]

const services = ref([])

const next = (): void => {
  emit('submit')
}
</script>
