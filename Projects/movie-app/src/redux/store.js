import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import moviesReducer from "./moviesSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    movies: moviesReducer,
  },
});
