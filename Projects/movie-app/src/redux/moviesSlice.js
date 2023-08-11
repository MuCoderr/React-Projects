import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setDataAndLoading: (state, action) => {
      state.data = action.payload.data;
      state.loading = action.payload.loading;
    },
  },
});

export const { setDataAndLoading } = moviesSlice.actions;
export default moviesSlice.reducer;
