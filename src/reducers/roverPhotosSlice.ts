import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any[] = [];

export const roverPhotosSlice = createSlice({
  name: 'roverPhotos',
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<[]>) => {
      state = action.payload;
      return state;
    },
  }
});

export const { setPhotos } = roverPhotosSlice.actions;
export default roverPhotosSlice.reducer;