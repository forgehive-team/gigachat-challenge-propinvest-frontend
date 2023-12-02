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
        :image="project.image"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { api } from '@/api'
import { ProjectCard } from '@/components'
import type { ProjectPruned } from '@/types'
import type { Ref } from 'vue'
import { onMounted, ref } from 'vue'

const fakeProjects: any = [
  {
    id: 2,
    title: '\u0416\u041a Shagal',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/18116291001DOCTYPES.jpg'
  },
  {
    id: 8,
    title: '\u0416\u041a \u0421\u043e\u0431\u044b\u0442\u0438\u0435',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/22250448001DOCTYPES.jpg'
  },
  {
    id: 12,
    title: '\u0416\u041a \u041f\u0440\u0435\u043c\u0438\u0443\u043c-\u043a\u0432\u0430\u0440\u0442\u0430\u043b JAZZ',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/5898706001DOCTYPES.jpg'
  },
  {
    id: 3,
    title: '\u0416\u041a \u0414\u043e\u043c \u041b\u0430\u0432\u0440\u0443\u0448\u0438\u043d\u0441\u043a\u0438\u0439',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/22353531001DOCTYPES.jpg'
  },
  {
    id: 7,
    title: '\u0416\u041a \u0421\u0438\u043c\u0432\u043e\u043b',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/22249902001DOCTYPES.jpg'
  },
  {
    id: 4,
    title: '\u0416\u041a Shagal',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/18116291001DOCTYPES.jpg'
  },
  {
    id: 9,
    title: '\u0416\u041a \u0417\u0418\u041b\u0410\u0420\u0422',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/15020086001DOCTYPES.jpg'
  },
  {
    id: 5,
    title: '\u0416\u041a \u0420\u0435\u043a\u0430',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/11650986001DOCTYPES.jpg'
  },
  {
    id: 10,
    title: '\u0416\u041a LIFE-\u0412\u0430\u0440\u0448\u0430\u0432\u0441\u043a\u0430\u044f',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/22833523001DOCTYPES.jpg'
  },
  {
    id: 6,
    title: '\u0416\u041a \u0414\u043e\u043c \u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0435',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/22353487001DOCTYPES.jpg'
  }
]

const projects: Ref<ProjectPruned[] | null> = ref(null)

const fetchProjects = async (): Promise<void> => {
  try {
    projects.value = await api.projects.getProjects()
  } catch (e) {
    console.log(e)
    projects.value = fakeProjects
  }
}

onMounted(() => {
  fetchProjects()
})
</script>
