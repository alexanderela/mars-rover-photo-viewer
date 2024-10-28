import { FetchRoverProps } from "../types/common";

export const fetchRoverPhotos = async ({
  rover,
  options = {},
  page,
}: FetchRoverProps) => {
  try {    
    const url: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&page=${page}&api_key=${import.meta.env.VITE_NASA_API_KEY}`;
    const photoData = await fetch(url, options);
    const photoJsonData = await photoData.json();
    return photoJsonData;
  } catch (error) {
    throw new Error();
  }
};
