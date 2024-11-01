import { Rover, RoverPhotoStateObj } from "../../../types/common";

export interface RoverPhotoState {
  photos: RoverPhotoStateObj;
  selectedRover: Rover;
  page: number;
}