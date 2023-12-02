<template>
  <main class="min-h-[calc(100dvh-246px)] mb-32">
    <Swiper class="swiper" :slides-per-view="1" loop :space-between="0">
      <SwiperSlide class="slide"><img src="/413.jpeg" /></SwiperSlide>
      <SwiperSlide class="slide"><img src="/413.jpeg" /></SwiperSlide>
      <SwiperSlide class="slide"><img src="/413.jpeg" /></SwiperSlide>
    </Swiper>

    <h2 class="font-custom text-center font-light text-5xl my-[60px] leading-none text-secondary">
      Жилой комплекс “Белая поляна”
    </h2>
    <div class="flex gap-[60px] container mx-auto">
      <p class="w-full font-sans font-light text-2xl leading-8">
        Какое-то длинное описание короче у меня лорем генерация не работает походу из-за вскода пожтому мне приходится
        вручную это писать блин еще и экзамен через 2 дня а я тут это делаю
      </p>
      <p class="w-full font-sans font-light text-2xl leading-8">
        Какое-то длинное описание короче у меня лорем генерация не работает походу из-за вскода пожтому мне приходится
        вручную это писать блин еще и экзамен через 2 дня а я тут это делаю
      </p>
    </div>
    <h2 class="font-custom text-center font-light text-5xl my-[60px] leading-none text-secondary">Местоположение</h2>
    <YandexMap />
    <h2 class="font-custom text-center font-light text-5xl my-[60px] leading-none text-secondary">Лоты проекта</h2>
    <div class="container mx-auto grid grid-cols-2 gap-[60px]">
      <LotCard />
      <LotCard />
      <LotCard />
    </div>
  </main>
</template>

<script setup lang="ts">
import { YandexMap } from '@/components'
import { LotCard } from '@/components/'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
console.log(id)

const data: any = ref(null)

const fetchData = async () => {}
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
