<template>
  <main class="container min-h-[calc(100dvh-246px)] mx-auto mb-16">
    <div class="mt-[100px] flex justify-between h-min w-full items-end">
      <h2 class="font-custom font-bold text-[41px] text-secondary leading-none">Кондратьев Сергей Викторович</h2>
      <button class="text-accent font-light text-2xl leading-none flex gap-2 items-center">
        Редактировать <IconArrowRight />
      </button>
    </div>
    <div class="grid-container">
      <ProfileInfoCard :fields="basicInfo" />
      <ProfileInfoCard :fields="conditions" title="Условия" />
      <ProfileInfoCard :fields="income" title="Доходы" />
      <ProfileInfoCard :fields="spending" title="Расходы" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ProfileInfoCard } from '@/components/'
import { IconArrowRight } from '@/components/icons'
import { useAccountInfo } from '@/composables'
import { onMounted } from 'vue'

const { basicInfo, conditions, spending, income, fetchAccountInfo } = useAccountInfo()

onMounted(() => {
  fetchAccountInfo()
})
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 60px;
  margin-top: 50px;
}
</style>
