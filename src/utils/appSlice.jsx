import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    ismenuOpen: true, // This state will control both sidebar and main content width
  },
  reducers: {
    toggleMenu: (state) => {
      state.ismenuOpen = !state.ismenuOpen; // Toggle sidebar and main content width
    },
  },
});

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;
