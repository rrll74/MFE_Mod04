<template>
  <PageHeader />

  <div>
    <slot />
  </div>

  <TaskList />
</template>

<script setup lang="ts">
defineProps<{}>();
</script>
