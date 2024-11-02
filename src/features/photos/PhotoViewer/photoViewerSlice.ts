import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RoverPhotoStateObj } from "../../../types/common";
import { RoverPhotoState } from "./types";

const initialState: RoverPhotoState = {
  photos: {},
};

export const roverPhotosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<RoverPhotoStateObj>): void => {
      state.photos = action.payload;
    },
  }
});

export const { setPhotos } = roverPhotosSlice.actions;
export default roverPhotosSlice.reducer;