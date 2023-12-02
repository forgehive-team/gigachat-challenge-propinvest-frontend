<template>
  <main v-if="data" class="min-h-[calc(100dvh-246px)] mb-32">
    <Swiper class="swiper" :slides-per-view="1" loop :space-between="0">
      <SwiperSlide v-for="(image, idx) in data.images" :key="idx" class="slide"><img :src="image" /></SwiperSlide>
    </Swiper>

    <h2 class="font-custom text-center font-light text-5xl my-[60px] leading-none text-secondary">
      {{ data.name }}
    </h2>
    <div class="flex gap-[60px] container mx-auto">
      <p class="w-full font-sans font-light text-2xl leading-8">
        {{ data.description }}
      </p>
      <p class="w-full font-sans font-light text-2xl leading-8">
        <br />
        {{ data.region }}
        <br />
        {{ data.city }}
        <br />
        {{ data.area }}

        <br />
        {{ data.metro }}
        <br />
        {{ data.street }}
      </p>
    </div>
    <h2 class="font-custom text-center font-light text-5xl my-[60px] leading-none text-secondary">Местоположение</h2>
    <YandexMap :coordinates="data.coordinates" />
    <h2 class="font-custom text-center font-light text-5xl my-[60px] leading-none text-secondary">Лоты проекта</h2>
    <div class="container mx-auto grid grid-cols-2 gap-[60px]">
      <LotCard />
      <LotCard />
      <LotCard />
    </div>
  </main>
</template>

<script setup lang="ts">
import { api } from '@/api'
import { YandexMap } from '@/components'
import { LotCard } from '@/components/'
import type { Project } from '@/types'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Ref } from 'vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

const data: Ref<Project | null> = ref(null)

const fetchData = async (): Promise<void> => {
  try {
    data.value = await api.projects.getProjectById(id as string)
  } catch (e) {
    console.log(e)
    data.value = {
      id: 1,
      name: '\u0416\u041a \u0414\u043e\u043c \u041b\u0430\u0432\u0440\u0443\u0448\u0438\u043d\u0441\u043a\u0438\u0439',
      description: null,
      images: [
        'https:\/\/erzrf.ru\/images\/doctypes\/22353531001DOCTYPES.jpg',
        'https:\/\/erzrf.ru\/images\/doctypes\/22353558001DOCTYPES.jpg',
        'https:\/\/erzrf.ru\/images\/doctypes\/22353560001DOCTYPES.jpg',
        'https:\/\/erzrf.ru\/images\/doctypes\/22353564001DOCTYPES.jpg',
        'https:\/\/erzrf.ru\/images\/doctypes\/22353566001DOCTYPES.jpg',
        'https:\/\/erzrf.ru\/images\/doctypes\/22353568001DOCTYPES.jpg',
        'https:\/\/erzrf.ru\/images\/doctypes\/22474362001DOCTYPES.jpg'
      ],
      coordinates: [55.739397, 37.620223],
      metro: null,
      city: '\u0433. \u041c\u043e\u0441\u043a\u0432\u0430',
      area: '\u042f\u043a\u0438\u043c\u0430\u043d\u043a\u0430',
      region: '\u0433.\u041c\u043e\u0441\u043a\u0432\u0430',
      street:
        '\u043f\u0435\u0440\u0435\u0443\u043b\u043e\u043a \u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0422\u043e\u043b\u043c\u0430\u0447\u0435\u0432\u0441\u043a\u0438\u0439'
    }
  }
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped lang="scss">
.swiper {
  width: 100%;
  height: 600px;
  max-width: unset !important;
}
.slide {
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
