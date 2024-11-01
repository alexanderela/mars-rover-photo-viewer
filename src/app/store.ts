import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "../features/photos/PhotoViewer/photoViewerSlice";

const reducer = {
  roverPhotos: photosReducer,
}

export const store = configureStore({ 
  reducer,
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];