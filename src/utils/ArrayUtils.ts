import { RoverPhoto, RoverPhotoStateObj } from "../types/common";

export const convertPhotoArrayToObj = (arr: RoverPhoto[]): RoverPhotoStateObj => {
  return arr.reduce((acc: RoverPhotoStateObj, photoObj) => {
    if(!acc[photoObj.id]) {
      acc[photoObj.id] = photoObj;
    }
    return acc;
  }, {});
}