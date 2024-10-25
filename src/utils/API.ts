import { Obj } from "../types/common";

export const fetchRoverPhotos = async (rover: string, options: Obj = {}) => {
    const url: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`;
    const photoData = await fetch(url, options);
    const photoJsonData = await photoData.json();
    return photoJsonData;
}