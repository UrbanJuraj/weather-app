import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { notification: "" },
  reducers: {
    showNotification(state, action) {
      state.notification = action.payload.message;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
