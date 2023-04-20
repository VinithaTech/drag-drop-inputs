import { configureStore } from "@reduxjs/toolkit";
import { data } from "./Data";

const store = configureStore({
  reducer: {
    dataStore: data.reducer,
  },
});

export default store;
