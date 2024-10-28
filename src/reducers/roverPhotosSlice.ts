import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RoverPhoto } from "../types/common";

const initialState: RoverPhoto[] = [];

export const roverPhotosSlice = createSlice({
  name: "roverPhotos",
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<RoverPhoto[]>) => {
      state = action.payload;
      return state;
    },
  }
});

export const { setPhotos } = roverPhotosSlice.actions;
export default roverPhotosSlice.reducer;