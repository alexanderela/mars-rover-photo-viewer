import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Rover } from "../types/common";

const initialState: Rover = Rover.CURIOSITY as Rover;

export const selectedRoverSlice = createSlice({
  name: 'selectedRover',
  initialState,
  reducers: {
    setSelectedRover: (state, action: PayloadAction<Rover>): Rover => {
      state = action.payload;
      return state;
    }
  }
});

export const { setSelectedRover } = selectedRoverSlice.actions;
export default selectedRoverSlice.reducer;