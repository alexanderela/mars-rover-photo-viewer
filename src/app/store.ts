import { configureStore } from "@reduxjs/toolkit";
import roverPhotosReducer from "../reducers/roverPhotosSlice";

const reducer = {
    roverPhotos: roverPhotosReducer
}

export const store = configureStore({ 
    reducer,
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];