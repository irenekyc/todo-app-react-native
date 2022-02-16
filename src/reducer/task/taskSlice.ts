import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TaskItemType, TaskStatusType } from "../../typings/Task";
import { TASK_STATUS_COMPLETED, TASK_STATUS_ACTIVE } from "../../constans/task";
import { updateTaskStatus } from "./actions";

export interface TaskState {
  tasks: TaskItemType[];
  number: {
    completed: number;
    active: number;
  };
}

const initialState: TaskState = {
  tasks: [],
  number: {
    completed: 0,
    active: 0,
  },
};

const updateTaskNumber = (
  tasks: TaskItemType[]
): {
  completed: number;
  active: number;
} => {
  return {
    completed: tasks.filter(
      (task: TaskItemType) => task.status === TASK_STATUS_COMPLETED
    ).length,
    active: tasks.filter(
      (task: TaskItemType) => task.status === TASK_STATUS_ACTIVE
    ).length,
  };
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // loadTodo: (state, action: PayloadAction<TaskItemType[]>) => {
    //   state.tasks = action.payload;
    //   state.number = updateTaskNumber(action.payload);
    // },
    addTask: (state, action: PayloadAction<TaskItemType>) => {
      const newTaskList = [...state.tasks, action.payload];
      state.tasks = newTaskList;
      state.number = updateTaskNumber(newTaskList);
      // updateTasksLocalStorage(newTaskList);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const newTaskList = state.tasks.filter(
        (task: TaskItemType) => task.id !== action.payload
      );
      state.tasks = newTaskList;
      state.number = updateTaskNumber(newTaskList);
      // updateTasksLocalStorage(newTaskList);
    },
    clearCompletedTasks: (state) => {
      const newTaskList = state.tasks.filter(
        (task: TaskItemType) => task.status !== TASK_STATUS_COMPLETED
      );
      state.tasks = newTaskList;
      state.number = updateTaskNumber(newTaskList);
      // updateTasksLocalStorage(newTaskList);
    },
    updateTaskStatus: (
      state,
      action: PayloadAction<{ taskId: string; updatedStatus: TaskStatusType }>
    ) => {
      const { taskId, updatedStatus } = action.payload;
      const newTaskList = state.tasks.map((task: TaskItemType) => {
        if (task.id === taskId) {
          return {
            ...task,
            status: updatedStatus,
          };
        }
        return task;
      });
      state.tasks = newTaskList;
      state.number = updateTaskNumber(newTaskList);
      // updateTasksLocalStorage(newTaskList);
    },
  },
});

export default taskSlice.reducer;
