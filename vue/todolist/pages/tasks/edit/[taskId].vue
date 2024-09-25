<template>
  <Editor :taskId="taskId" />
</template>

<script setup lang="ts">
defineProps<{}>();

const route = useRoute();

const taskId = computed(() => route.params.taskId as string);
</script>
