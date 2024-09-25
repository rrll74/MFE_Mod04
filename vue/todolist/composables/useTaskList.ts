import type { Task } from "~/types/Task";
export const useTaskListStore = defineStore(
  "taskListStore",
  () => {
    const taskList = ref<Task[]>([]);

    const initData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulamos un tiempo de espera de 2 segundos por acceso a servidor

      if (taskList.value.length === 0) {
        const response = await fetch("data.json");
        const data = await response.json();
        taskList.value = data;
      }
      return;
    };

    const deleteTask = (id: number) => {
      taskList.value.splice(id, 1);
    };

    const updateTask = (id: number, desc: string) => {
      if (id < 0) {
        taskList.value.push({ desc: desc, done: false });
      } else {
        taskList.value[id].desc = desc;
      }
    };

    return {
      taskList,
      initData,
      deleteTask,
      updateTask,
    };
  },
  {
    persist: true,
  }
);
