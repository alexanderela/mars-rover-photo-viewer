import { combineReducers, configureStore } from "@reduxjs/toolkit";
import photosReducer from "../features/photos/PhotoViewer/photoViewerSlice";

const rootReducer = combineReducers({
  roverPhotos: photosReducer,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({ 
    reducer: rootReducer,
    preloadedState
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

/**
 The following type is used when the more 'classic' thunk pattern is used.
 */

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   UnknownAction
// >;