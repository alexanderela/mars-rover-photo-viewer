export interface Obj {
  [key: string]: string;
}

export enum Rover {
  CURIOSITY = "curiosity",
  OPPORTUNITY = "opportunity",
  SPIRIT = "spirit",
}

export interface RoverPhoto {
  id: number;
  name: string;
  roverName: string;
  imgSrc: string;
  earthDate: string;
  sol: number;
  cameraName: string;
  cameraFullName: string;
}

// export interface RoverPhotoStateObj {
//   [id: number]: RoverPhoto;
// }
export interface RoverPhotoStateObj {
  [id: number]: RoverPhoto;
}
