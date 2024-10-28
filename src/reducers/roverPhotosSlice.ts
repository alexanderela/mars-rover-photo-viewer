import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any[] = [];

export const roverPhotosSlice = createSlice({
    name: 'roverPhotos',
    initialState,
    reducers: {
      setPhotos: (state, action: PayloadAction<[]>) => {
        if(!state.length) {
            state.push(...action.payload);
        }
        },
    }
});

export const { setPhotos } = roverPhotosSlice.actions;
export default roverPhotosSlice.reducer;