import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RoverPhotoStateObj } from "../../../types/common";
import { AppThunk } from "../../../app/store";
import { fetchRoverPhotos, fetchTotalNumberOfRoverPhotos } from "../../../api/API";
import { HandleSetRoverPhotosProps } from "../../../api/types";

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
export const handleSetRoverPhotos = ({ rover, page }: HandleSetRoverPhotosProps): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));

      /* NASA's Mars Rover API unfortunately does not return total count.  Therefore,
      separate async requests are necessary for getting the total photo count and the 25 photos
      we want for any given pagination step. 
      */
      const totalPhotosUrl: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/latest_photos?&api_key=${import.meta.env.VITE_NASA_API_KEY}`;
      const totalNumberOfRoverPhotos = await fetchTotalNumberOfRoverPhotos({ url: totalPhotosUrl });
      dispatch(setTotalPhotos(totalNumberOfRoverPhotos));

      const roverPhotosUrl: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/latest_photos?page=${page || "1"}&api_key=${import.meta.env.VITE_NASA_API_KEY}`;
      const roverPhotos = await fetchRoverPhotos({ url: roverPhotosUrl });
      dispatch(setPhotos(roverPhotos));

      dispatch(setIsLoading(false));
    } catch(err) {
      console.warn(err);
    }
  }
};

export const { setPhotos, setIsLoading, setTotalPhotos } = roverPhotosSlice.actions;
export default roverPhotosSlice.reducer;