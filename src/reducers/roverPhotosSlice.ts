import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RoverPhotosState {
    roverPhotos: any;
}

const initialState: RoverPhotosState = {
    roverPhotos: [],
}
export const roverPhotosSlice = createSlice({
    name: 'roverPhotos',
    initialState,
    reducers: {
      setPhotos: (state, action: PayloadAction<[]>) => {
            state.roverPhotos.push(action.payload);
        },
    }
});

export const { setPhotos } = roverPhotosSlice.actions;
export default roverPhotosSlice.reducer;