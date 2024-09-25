<template>
  <div class="bg-yellow-100 rounded-md m-2 p-2">
    <span
      >¿Seguro desea eliminar la tarea "{{
        taskList.taskList[task]?.desc
      }}"?</span
    >
    <button
      class="mr-2 ml-2 bg-red-300 rounded-md min-w-10"
      @click="onClickYes"
    >
      Sí
    </button>
    <button
      class="mr-2 ml-2 bg-gray-300 rounded-md min-w-10"
      @click="onClickNo"
    >
      No
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{}>();

const route = useRoute();
const router = useRouter();

const taskList = useTaskListStore();
const task = parseInt(route.path.split("/").reverse()[0]);

const onClickYes = () => {
  taskList.deleteTask(task);
  router.push("/");
};

const onClickNo = () => {
  router.push("/");
};
</script>
