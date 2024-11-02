import { Obj, Rover } from "../types/common";

export interface FetchRoverProps {
  rover: Rover;
  options?: Obj;
  page?: string;
}

export interface RoverPhotoRaw {
  id: number;
  sol: number;
  camera: RoverPhotoCameraRaw;
  img_src: string;
  earth_date: string;
  rover: RoverPhotoRoverRaw
}

export interface RoverPhotoRoverRaw {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  cameras: RoverPhotoRoverCameraRaw[];
}

export interface RoverPhotoRoverCameraRaw {
  name: string;
  full_name: string;
}

export interface RoverPhotoCameraRaw {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}