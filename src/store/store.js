import { configureStore } from "@reduxjs/toolkit";
import Todo from "./slices/todo";
const store = configureStore({
  reducer: {
    todo: Todo,
  },
});

export { store };
