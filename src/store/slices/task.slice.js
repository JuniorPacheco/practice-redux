import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  initialState,
  name: "tasks",
  reducers: {
    addTask: (state, { payload }) => {
      const newTasks = [...state.tasks, payload];
      state.tasks = newTasks;
    },
    deleteTask: (state, { payload }) => {
      const newTasks = state.tasks.filter((task) => task.id !== payload);
      state.tasks = newTasks;
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
