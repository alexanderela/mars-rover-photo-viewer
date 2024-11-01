import {  RoverPhoto, RoverPhotoStateObj } from "../types/common";
import { FetchRoverProps, RoverPhotoRaw } from "../api/types";
import { convertPhotoArrayToObj } from "../utils/ArrayUtils";

export const fetchRoverPhotos = async ({
  rover,
  options = {},
  page,
}: FetchRoverProps): Promise<RoverPhotoStateObj> => {
  try {    
    // const url: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&page=${page}&api_key=${import.meta.env.VITE_NASA_API_KEY}`;
    const url: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/latest_photos?page=${page}&api_key=${import.meta.env.VITE_NASA_API_KEY}`;
    const photoData = await fetch(url, options);
    const photoJsonData = await photoData.json();
    const formattedRoverPhotosArr = await formatRoverPhotosData(photoJsonData.latest_photos);
    return convertPhotoArrayToObj(formattedRoverPhotosArr);
  } catch (error) {
    console.warn(error);
    return [];
  }
};

export const formatRoverPhotosData = async (roverPhotos: RoverPhotoRaw[]): Promise<RoverPhoto[]> => {
  const roverPhotosPromises = roverPhotos.map(async roverPhoto => {
    return {
      id: roverPhoto.id,
      name: roverPhoto.rover.name,
      imgSrc: roverPhoto.img_src,
      earthDate: roverPhoto.earth_date,
      sol: roverPhoto.sol,
      cameraName: roverPhoto.camera.name,
      cameraFullName: roverPhoto.camera.full_name
    };
  });

  return Promise.all(roverPhotosPromises);
}
