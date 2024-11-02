import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RoverPhotoStateObj } from "../../../types/common";
import { AppThunk } from "../../../app/store";
import { fetchRoverPhotos, fetchTotalNumberOfRoverPhotos } from "../../../api/API";
import { FetchRoverProps } from "../../../api/types";

const initialState = {
  photos: {},
  isLoading: false,
  totalPhotos: 0
};

export interface State {
  photos: { [key: number]: RoverPhotoStateObj };
  isLoading: boolean;
  totalPhotos: number;
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
    },
    setTotalPhotos: (state, action: PayloadAction<number>): State => {
      state.totalPhotos = action.payload;
      return state;
    }
  }
});

// Thunk
export const handleSetPhotos = ({ rover, page }: FetchRoverProps): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      const totalNumberOfRoverPhotos = await fetchTotalNumberOfRoverPhotos({ rover });
      dispatch(setTotalPhotos(totalNumberOfRoverPhotos));

      const roverPhotos = await fetchRoverPhotos({ rover, page });
      dispatch(setPhotos(roverPhotos));

      dispatch(setIsLoading(false));
    } catch(err) {
      console.warn(err);
    }
  }
};

export const { setPhotos, setIsLoading, setTotalPhotos } = roverPhotosSlice.actions;
export default roverPhotosSlice.reducer;