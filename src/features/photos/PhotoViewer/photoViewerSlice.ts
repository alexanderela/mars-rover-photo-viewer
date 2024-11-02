import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RoverPhotoStateObj } from "../../../types/common";

const initialState = {};

export const roverPhotosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<RoverPhotoStateObj>): void => {
      state = action.payload;
    },
  }
});

export const { setPhotos } = roverPhotosSlice.actions;
export default roverPhotosSlice.reducer;