import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "Todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

export const { addTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
