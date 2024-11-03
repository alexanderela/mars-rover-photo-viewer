import { combineReducers, configureStore, ThunkAction, UnknownAction } from "@reduxjs/toolkit";
import photosReducer from "../features/photos/PhotoViewer/photoViewerSlice";

const reducer = combineReducers({
  roverPhotos: photosReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({ 
    reducer,
    preloadedState
  });
};

export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;