<template>
  <TheHeader />

  <RouterView />

  <TheFooter />
</template>

<script setup lang="ts">
import { TheFooter, TheHeader } from './components'

import { RouterView } from 'vue-router'
</script>
