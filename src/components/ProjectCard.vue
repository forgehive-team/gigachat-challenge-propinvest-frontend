<template>
  <div class="bg-card p-[30px] rounded">
    <div class="relative flex gap-[60px]">
      <img :src="image" />
      <div class="w-[50%] pl-[60px] ml-auto flex flex-col gap-[60px]">
        <h2 class="text-secondary font-normal text-2xl leading-none">{{ title }}</h2>
        <p class="text-secondary font-light text-[18px] leading-6">{{ descriprion }}</p>
        <button
          class="text-[18px] font-medium leading-5 tracking-wide text-center py-[15px] px-[50px] bg-accent text-white rounded w-[290px]"
          @click="goToProject"
        >
          УЗНАТЬ ПОДРОБНЕЕ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
  title: string
  descriprion: string
  projectId: number
  image: string
}>()

const router = useRouter()

const goToProject = (): void => {
  router.push(`/projects/${props.projectId}`)
}
</script>

<style scoped>
img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  min-width: 50%;
  max-width: 50%;
  border-radius: 16px;
  align-self: center;
  object-fit: cover;
}
</style>
