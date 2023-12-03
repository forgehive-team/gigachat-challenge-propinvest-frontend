<template>
  <TheForm :data="{ title: 'Социальная инфраструктура' }">
    <FormSelector v-model="needSocial" :items="needSocialList" />
    <FormSelector v-model="needFun" :items="needFunList" />
    <FormTextarea
      v-model="hasChildren"
      placeholder="Есть ли у вас дети, и насколько для вас важно наличие образовательных учреждений рядом с домом?"
    />
    <FormButton title="Далее" :action="next" class="bg-accent text-primary" />
  </TheForm>
</template>

<script setup lang="ts">
import { FormButton, FormSelector, FormTextarea, TheForm } from '@/components/form/components'
import type { FormSelectorItem, QuestResult } from '@/types'

import { ref } from 'vue'

const emit = defineEmits<{ (e: 'submit', data: QuestResult): void }>()

const needSocialList: FormSelectorItem[] = [
  {
    key: '',
    name: 'Важна ли доступность детских садов, школ, поликлиник, магазинов поблизости?',
    disabled: true,
    value: ''
  },
  { key: 'yes', name: 'Да', value: 'yes' },
  { key: 'no', name: 'Нет', value: 'no' }
]

const needFunList: FormSelectorItem[] = [
  {
    key: '',
    name: 'Интересуют ли вас наличие торговых центров и спортивных секций в районе?',
    disabled: true,
    value: ''
  },
  { key: 'yes', name: 'Да', value: 'yes' },
  { key: 'no', name: 'Нет', value: 'no' }
]

const needSocial = ref<FormSelectorItem>(needSocialList[0])
const needFun = ref<FormSelectorItem>(needFunList[0])
const hasChildren = ref('')

const next = (): void => {
  const answer = {
    'Важна ли для вас доступность детских садов, школ, поликлиник, магазинов поблизости?':
      needSocial.value.key === 'yes' ? 'Да, очень важна' : 'В целом, не испытываю в этом нужды',
    'Интересуют ли вас наличие торговых центров и спортивных секций в районе?':
      needSocial.value.key === 'yes' ? 'Да, интересуют' : 'Нет, не интересуют',
    'Есть ли у вас дети, и насколько для вас важно наличие образовательных учреждений рядом с домом?': hasChildren.value
  }

  emit('submit', answer)
}
</script>
