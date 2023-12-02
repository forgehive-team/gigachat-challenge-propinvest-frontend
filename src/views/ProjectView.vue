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
      id: 15,
      name: '\u0416\u041a \u0420\u0435\u043a\u0430',
      description:
        '\u0421\u0442\u0430\u0442\u0443\u0441, \u044d\u043a\u043e\u043b\u043e\u0433\u0438\u044f, \u043e\u0442\u043b\u0438\u0447\u043d\u0430\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u0430\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c \u2013 \u0442\u0440\u0438 \u043a\u0438\u0442\u0430 \u0440\u0430\u0439\u043e\u043d\u0430 \u0420\u0430\u043c\u0435\u043d\u043a\u0438, \u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e\u0433\u043e \u043c\u043d\u043e\u0433\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u043f\u0430\u0440\u043a\u0430\u043c\u0438, \u0437\u0430\u043f\u043e\u0432\u0435\u0434\u043d\u0438\u043a\u0430\u043c\u0438, \u043f\u0440\u0435\u0441\u0442\u0438\u0436\u043d\u044b\u043c\u0438 \u0412\u0423\u0417\u0430\u043c\u0438 \u0438 \u044d\u043b\u0438\u0442\u043d\u044b\u043c\u0438 \u0436\u0438\u043b\u044b\u043c\u0438 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u0430\u043c\u0438.',
      images: [
        'https:\/\/erzrf.ru\/images\/doctypes\/11650986001DOCTYPES.jpg',
        'https:\/\/erzrf.ru\/images\/doctypes\/11650988001DOCTYPES.jpg',
        'https:\/\/erzrf.ru\/images\/doctypes\/11650990001DOCTYPES.jpg',
        'https:\/\/erzrf.ru\/images\/doctypes\/11650992001DOCTYPES.jpg'
      ],
      coordinates: [55.691936, 37.480376],
      metro:
        '\u041c\u0438\u0447\u0443\u0440\u0438\u043d\u0441\u043a\u0438\u0439 \u043f\u0440\u043e\u0441\u043f\u0435\u043a\u0442 (7 \u043c\u0438\u043d. \u043f\u0435\u0448\u043a\u043e\u043c, 7 \u043c\u0438\u043d. \u043d\u0430 \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u0435)',
      city: '\u0433. \u041c\u043e\u0441\u043a\u0432\u0430',
      area: '\u0420\u0430\u043c\u0435\u043d\u043a\u0438',
      region: '\u0433.\u041c\u043e\u0441\u043a\u0432\u0430',
      street: '\u0443\u043b\u0438\u0446\u0430 \u041b\u043e\u0431\u0430\u0447\u0435\u0432\u0441\u043a\u043e\u0433\u043e'
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
