<template>
  <button
    class="bg-blue-400 border-blue-200 border-2 rounded-md p-1 m-2"
    @click="onClickAddTask"
  >
    Agregar tarea
  </button>
</template>

<script setup lang="ts">
defineProps<{}>();

const task = ref({ id: 0, desc: "", done: false });

const router = useRouter();

const onClickAddTask = () => {
  router.push("/insert");
};
</script>
