import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 1;

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>): number => {
      state = action.payload;
      return state;
    }
  }
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;