import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: "",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { setResult } = calculatorSlice.actions;
export default calculatorSlice.reducer;
