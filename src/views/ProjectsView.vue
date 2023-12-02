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
    id: 28,
    title: '\u0416\u041a \u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u0434\u043e\u043c',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/11522979001DOCTYPES.jpg'
  },
  {
    id: 39,
    title: '\u0416\u041a \u0410\u043a\u0432\u0430 Deluxe',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/6643971001DOCTYPES.jpg'
  },
  {
    id: 33,
    title: '\u0416\u041a \u041b\u0435\u0433\u0435\u043d\u0434\u0430',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/11302537001DOCTYPES.jpg'
  },
  {
    id: 24,
    title: '\u0416\u041a Familia',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/24412278001DOCTYPES.jpg'
  },
  {
    id: 23,
    title: '\u0416\u041a \u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0438\u0439, 65',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/21207200001DOCTYPES.jpg'
  },
  {
    id: 22,
    title: '\u0416\u041a \u041f\u0440\u0435\u043c\u0438\u0443\u043c-\u043a\u0432\u0430\u0440\u0442\u0430\u043b JAZZ',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/5898706001DOCTYPES.jpg'
  },
  {
    id: 15,
    title: '\u0416\u041a \u0420\u0435\u043a\u0430',
    description:
      '\u0421\u0442\u0430\u0442\u0443\u0441, \u044d\u043a\u043e\u043b\u043e\u0433\u0438\u044f, \u043e\u0442\u043b\u0438\u0447\u043d\u0430\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u0430\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c \u2013 \u0442\u0440\u0438 \u043a\u0438\u0442\u0430 \u0440\u0430\u0439\u043e\u043d\u0430 \u0420\u0430\u043c\u0435\u043d\u043a\u0438, \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e\u0433\u043e \u043c\u043d\u043e\u0433\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u043f\u0430\u0440\u043a\u0430\u043c\u0438, \u0437\u0430\u043f\u043e\u0432\u0435\u0434\u043d\u0438\u043a\u0430\u043c\u0438, \u043f\u0440\u0435\u0441\u0442\u0438\u0436\u043d\u044b\u043c\u0438 \u0412\u0423\u0417\u0430\u043c\u0438 \u0438 \u044d\u043b\u0438\u0442\u043d\u044b\u043c\u0438 \u0436\u0438\u043b\u044b\u043c\u0438 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0430\u043c\u0438.',
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/11650986001DOCTYPES.jpg'
  },
  {
    id: 37,
    title: '\u0416\u041a \u0410\u043a\u0432\u0430\u043c\u0430\u0440\u0438\u043d Park',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/24185059001DOCTYPES.jpg'
  },
  {
    id: 16,
    title: '\u0416\u041a \u0414\u043e\u043c \u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0435',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/22353487001DOCTYPES.jpg'
  },
  {
    id: 35,
    title: '\u0416\u041a \u0414\u043e\u0431\u0440\u043e\u0433\u043e\u0440\u043e\u0434',
    description: null,
    image: 'https:\/\/erzrf.ru\/images\/doctypes\/22502561001DOCTYPES.jpg'
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
