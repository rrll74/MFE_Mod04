<template>
  <div class="flex flex-row content-between">
    <label class="bg-blue-100 p-2 rounded-md"
      >{{ numericTaskId < 0 ? "Inserción" : "Edición" }} de Tarea</label
    >
    <input
      type="text"
      v-model="work"
      placeholder="Tarea"
      class="text-black bg-gray-200 border-4 border-gray-500 rounded-md p-1 ml-2 w-[100%]"
      @keydown="onEnterKeyPressed"
    />
    <button
      class="bg-blue-400 border-blue-200 border-2 rounded-md p-1 m-2"
      @click="onUpdateButton"
    >
      {{ numericTaskId < 0 ? "Insertar" : "Actualizar" }}
    </button>
    <button
      class="bg-gray-400 border-gray-200 border-2 rounded-md p-1 m-2"
      @click="onCancelButton"
    >
      Cancelar
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Task } from "~/types/Task";

const props = defineProps<{
  taskId: string;
}>();

const router = useRouter();

const taskList = useTaskListStore();
const numericTaskId = parseInt(props.taskId);
const initText =
  numericTaskId >= 0 ? taskList.taskList[numericTaskId]?.desc : "";

const work = ref(initText);

const onCancelButton = () => {
  router.push("/");
};

const onUpdateButton = () => {
  taskList.updateTask(numericTaskId, work.value);
  router.push("/");
};

const onEnterKeyPressed = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    onUpdateButton();
  }
};
</script>
