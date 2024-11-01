import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RoverPhotoState, Rover, RoverPhotoStateObj } from "../../../types/common";

const initialState: RoverPhotoState = {
  photos: {},
  selectedRover: Rover.CURIOSITY as Rover,
  page: 1
};

export const roverPhotosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<RoverPhotoStateObj>): void => {
      state.photos = action.payload;
    },
    setSelectedRover: (state, action: PayloadAction<Rover>): void => {
      state.selectedRover = action.payload;
    },
    setPage: (state, action: PayloadAction<number>): void => {
      state.page = action.payload;
    }
  }
});

export const { setPhotos, setSelectedRover, setPage } = roverPhotosSlice.actions;
export default roverPhotosSlice.reducer;