import { configureStore } from "@reduxjs/toolkit";
import roverPhotosReducer from "../reducers/roverPhotosSlice";
import pageSliceReducer from "../reducers/pageSlice";
import selectedRoverSliceReducer from "../reducers/selectedRoverSlice";

const reducer = {
  roverPhotos: roverPhotosReducer,
  page: pageSliceReducer,
  selectedRover: selectedRoverSliceReducer,
}

export const store = configureStore({ 
  reducer,
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];