import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  json: [],
};

export const data = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    addNewElement: (state, action) => {
      state.json = [...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const dataAction = data.actions;

export default data;
