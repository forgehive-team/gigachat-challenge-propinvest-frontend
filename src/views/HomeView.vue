<template>
  <main class="container min-h-[calc(100dvh-246px)] mx-auto flex justify-center">
    <div class="mt-14">
      <RegForm />
      <RoleForm />
    </div>
  </main>
</template>

<script setup lang="ts">
import { RegForm, RoleForm } from '@/components/form'
</script>
