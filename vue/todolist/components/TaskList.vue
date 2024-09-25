<template>
  <div class="flex flex-col">
    <h2 class="text-center bg-green-200 p-2 rounded-md m-2">Lista de tareas</h2>
    <table class="text-center border-2" v-if="works.length > 0">
      <thead>
        <tr class="border-2">
          <th>Id</th>
          <th>Descripción</th>
          <th>Realizado</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-2 p-2" v-for="(work, index) in works" :key="index">
          <td>{{ index }}</td>
          <td class="text-justify">{{ work.desc }}</td>
          <td>
            <input type="checkbox" v-model="work.done" />
          </td>
          <td>
            <NuxtLink
              :to="`/tasks/edit/${index}`"
              class="bg-blue-400 border-red-200 border-2 rounded-md p-1"
            >
              Editar
            </NuxtLink>
            <NuxtLink
              :to="`/tasks/delete/${index}`"
              class="bg-red-400 border-ble-200 border-2 rounded-md p-1"
            >
              Eliminar
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { Task } from "~/types/Task";

defineProps<{}>();

const taskList = useTaskListStore();
const works = computed(() => taskList.taskList as Task[]);

onMounted(() => {
  taskList.initData().then();
});
</script>
