<template>
  <div>
    <yandex-map :coords="coordinates">
      <ymap-marker :coords="coordinates" :marker-id="1"> </ymap-marker>
    </yandex-map>
  </div>
</template>

<script setup lang="ts">
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

const coordinates = ['55.779504', '37.711258']
</script>

<style scoped>
.ymap-container {
  height: 500px;
  width: 100%;
  padding: 0 !important;
  margin: 0 !important;
}
</style>
