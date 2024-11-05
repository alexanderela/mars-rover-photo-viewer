import {  RoverPhoto, RoverPhotoStateObj } from "../types/common";
import { FetchRoverProps, RoverPhotoRaw } from "../api/types";
import { convertPhotoArrayToObj } from "../utils/ArrayUtils";

export const backendURL = "https://mars-rover-photo-viewer-be-f769ac5110ad.herokuapp.com/";

// Functions for fetching data from NASA Mars Rover Photos API
export const fetchRoverPhotoData = async ({
  url,
  options = {},
}: FetchRoverProps): Promise<RoverPhotoRaw[]> => {
  try {    
    const photoData = await fetch(url, options);
    const photoJsonData = await photoData.json();
    return photoJsonData.latest_photos;
  } catch (error) {
    console.warn(error);
    return Promise.reject(error);
  }
};

export const fetchRoverPhotos = async ({
  url,
  options = {},
}: FetchRoverProps): Promise<RoverPhotoStateObj> => {
  try {    
    const photoJsonData = await fetchRoverPhotoData({ url, options });
    const formattedRoverPhotosArr = await formatRoverPhotosData(photoJsonData);
    return convertPhotoArrayToObj(formattedRoverPhotosArr);
  } catch (error) {
    console.warn(error);
    return Promise.reject(error);
  }
};

export const fetchTotalNumberOfRoverPhotos = async ({
  url,
  options = {},
}: FetchRoverProps): Promise<number> => {
  try {    
    const photoJsonData = await fetchRoverPhotoData({ url, options });
    return photoJsonData.length;
  } catch (error) {
    console.warn(error);
    return Promise.reject(error);
  }
};

export const formatRoverPhotosData = async (roverPhotos: RoverPhotoRaw[]): Promise<RoverPhoto[]> => {
  try {
    const roverPhotosPromises = roverPhotos.map(async roverPhoto => {
      return {
        id: roverPhoto.id,
        name: roverPhoto.rover.name,
        roverName: roverPhoto.rover.name.toLowerCase(),
        imgSrc: roverPhoto.img_src,
        earthDate: roverPhoto.earth_date,
        sol: roverPhoto.sol,
        cameraName: roverPhoto.camera.name,
        cameraFullName: roverPhoto.camera.full_name
      };
    });
  
    return Promise.all(roverPhotosPromises);
  } catch(error) {
    return Promise.reject(error);
  }
};

// Functions for fetching favorite photos from backend API
export const getFavoritesPhotos = async (): Promise<RoverPhoto[]> => {
  try {
    const response = await fetch(`${backendURL}/favorites`);
    const favoritePhotos = await response.json();
    return favoritePhotos;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addFavoritePhoto = async (favoritePhoto: RoverPhoto): Promise<{ id: number }> => {
  try {
    const response = await fetch(`${backendURL}/favorites/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: favoritePhoto.id,
        name: favoritePhoto.name,
        roverName: favoritePhoto.roverName,
        imgSrc: favoritePhoto.imgSrc,
        earthDate: favoritePhoto.earthDate,
        sol: favoritePhoto.sol,
        cameraName: favoritePhoto.cameraName,
        cameraFullName: favoritePhoto.cameraFullName
      })
    });
  
    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteFavoritePhoto = async (favoritePhotoId: number): Promise<{ message: string }> => {
  try {
    const response = await fetch(`${backendURL}/favorites/${favoritePhotoId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    });
  
    return response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};