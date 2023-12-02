<template>
  <main class="container min-h-[calc(100dvh-246px)] mx-auto mb-32">
    <h1 class="font-custom text-center font-bold text-5xl my-[60px] leading-none text-secondary">ПРОЕКТЫ</h1>
    <div v-if="projects" class="flex flex-col gap-[60px]">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :descriprion="project.description"
        :project-id="project.id"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ProjectCard } from '@/components'
import { onMounted, ref } from 'vue'

const fakeProjects: any = [
  {
    title: 'Жилой комплекс “Белая поляна”',
    description:
      'Какой-то текст который, описание проекта. Какой-то текст который, описание проекта. Какой-то текст который, описание проекта. Какой-то текст который, описание проекта. Какой-то текст который, описание про Какой-то текст который, описание проекта. Какой-то текст который, описание проекта. Какой-то текст который, описание проекта. Какой-то текст который, описание проекта. ',
    id: 1,
    img: ''
  },
  {
    title: 'Жилой комплекс “Green Place”',
    description:
      'Какой-то текст который, описание проекта. Какой-то текст который, описание проекта. Какой-то текст который, описание проекта. Какой-то текст который, описание проекта. Какой-то текст который, описание про Какой-то текст который, описание проекта. Какой-то текст который, описание проекта. Какой-то текст который, описание проекта. Какой-то текст который, описание проекта. ',
    id: 2,
    img: ''
  }
]

const projects: any = ref(null)
const fetchProjects = async () => {
  projects.value = fakeProjects
}
onMounted(() => {
  fetchProjects()
})
</script>
