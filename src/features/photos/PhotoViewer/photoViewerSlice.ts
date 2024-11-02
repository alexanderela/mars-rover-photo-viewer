import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RoverPhotoStateObj } from "../../../types/common";

const initialState = {
  photos: {},
  isLoading: false,
};

export interface State {
  photos: { [key: number]: RoverPhotoStateObj };
  isLoading: boolean;
}

export const roverPhotosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setPhotos: (state, action: PayloadAction<RoverPhotoStateObj>): State => {
      state.photos = action.payload;
      return state;
    },
    setIsLoading: (state, action: PayloadAction<boolean>): State => {
      state.isLoading = action.payload;
      return state;
    }
  }
});

export const { setPhotos, setIsLoading } = roverPhotosSlice.actions;
export default roverPhotosSlice.reducer;