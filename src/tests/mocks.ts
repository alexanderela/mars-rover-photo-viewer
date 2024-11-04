import { RoverPhotoRaw } from "../api/types";
import { RootState } from "../app/store";
import { RoverPhoto, RoverPhotoStateObj } from "../types/common";

export const mockRoverPhotosState: RoverPhotoStateObj = {
  1228212: {
    id: 1228212,
    name: "Curiosity",
    roverName: "curiosity",
    imgSrc: "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/04102/opgs/edr/fcam/FLB_761645828EDR_F1060660FHAZ00302M_.JPG",
    earthDate: "2024-02-19",
    sol: 4102,
    cameraName: "FHAZ",
    cameraFullName: "Front Hazard Avoidance Camera"
  },
  1228213: {
    id: 1228213,
    name: "Curiosity",
    roverName: "curiosity",
    imgSrc: "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/04102/opgs/edr/fcam/FRB_761645828EDR_F1060660FHAZ00302M_.JPG",
    earthDate: "2024-02-19",
    sol: 4102,
    cameraName: "FHAZ",
    cameraFullName: "Front Hazard Avoidance Camera"
  },
  1228214: {
    id: 1228214,
    name: "Curiosity",
    roverName: "curiosity",
    imgSrc: "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/04102/opgs/edr/rcam/RLB_761645951EDR_S1060660RHAZ00300M_.JPG",
    earthDate: "2024-02-19",
    sol: 4102,
    cameraName: "RHAZ",
    cameraFullName: "Rear Hazard Avoidance Camera"
  }
}

export const mockPreloadedState: Partial<RootState> = {
  roverPhotos: {
    photos: mockRoverPhotosState,
    isLoading: false,
    totalPhotos: 3
  }
};

export const mockRoverPhotosFormatted: RoverPhoto[] = [
  {
    id: 1228212,
    name: "Curiosity",
    roverName: "curiosity",
    imgSrc: "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/04102/opgs/edr/fcam/FLB_761645828EDR_F1060660FHAZ00302M_.JPG",
    earthDate: "2024-02-19",
    sol: 4102,
    cameraName: "FHAZ",
    cameraFullName: "Front Hazard Avoidance Camera"
  },
  {
    id: 1228213,
    name: "Curiosity",
    roverName: "curiosity",
    imgSrc: "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/04102/opgs/edr/fcam/FRB_761645828EDR_F1060660FHAZ00302M_.JPG",
    earthDate: "2024-02-19",
    sol: 4102,
    cameraName: "FHAZ",
    cameraFullName: "Front Hazard Avoidance Camera"
  },
  {
    id: 1228214,
    name: "Curiosity",
    roverName: "curiosity",
    imgSrc: "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/04102/opgs/edr/rcam/RLB_761645951EDR_S1060660RHAZ00300M_.JPG",
    earthDate: "2024-02-19",
    sol: 4102,
    cameraName: "RHAZ",
    cameraFullName: "Rear Hazard Avoidance Camera"
  }
];

export const mockRoverPhotosRaw: RoverPhotoRaw[] = [
  {
    "id": 1228212,
    "sol": 4102,
    "camera": {
      "id": 20,
      "name": "FHAZ",
      "rover_id": 5,
      "full_name": "Front Hazard Avoidance Camera"
    },
    "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/04102/opgs/edr/fcam/FLB_761645828EDR_F1060660FHAZ00302M_.JPG",
    "earth_date": "2024-02-19",
    "rover": {
      "id": 5,
      "name": "Curiosity",
      "landing_date": "2012-08-06",
      "launch_date": "2011-11-26",
      "status": "active",
      "max_sol": 4102,
      "max_date": "2024-02-19",
      "total_photos": 695670,
      "cameras": [
        {
          "name": "FHAZ",
          "full_name": "Front Hazard Avoidance Camera"
        },
        {
          "name": "NAVCAM",
          "full_name": "Navigation Camera"
        },
        {
          "name": "MAST",
          "full_name": "Mast Camera"
        },
        {
          "name": "CHEMCAM",
          "full_name": "Chemistry and Camera Complex"
        },
        {
          "name": "MAHLI",
          "full_name": "Mars Hand Lens Imager"
        },
        {
          "name": "MARDI",
          "full_name": "Mars Descent Imager"
        },
        {
          "name": "RHAZ",
          "full_name": "Rear Hazard Avoidance Camera"
        }
      ]
    }
  },
  {
    "id": 1228213,
    "sol": 4102,
    "camera": {
      "id": 20,
      "name": "FHAZ",
      "rover_id": 5,
      "full_name": "Front Hazard Avoidance Camera"
    },
    "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/04102/opgs/edr/fcam/FRB_761645828EDR_F1060660FHAZ00302M_.JPG",
    "earth_date": "2024-02-19",
    "rover": {
      "id": 5,
      "name": "Curiosity",
      "landing_date": "2012-08-06",
      "launch_date": "2011-11-26",
      "status": "active",
      "max_sol": 4102,
      "max_date": "2024-02-19",
      "total_photos": 695670,
      "cameras": [
        {
          "name": "FHAZ",
          "full_name": "Front Hazard Avoidance Camera"
        },
        {
          "name": "NAVCAM",
          "full_name": "Navigation Camera"
        },
        {
          "name": "MAST",
          "full_name": "Mast Camera"
        },
        {
          "name": "CHEMCAM",
          "full_name": "Chemistry and Camera Complex"
        },
        {
          "name": "MAHLI",
          "full_name": "Mars Hand Lens Imager"
        },
        {
          "name": "MARDI",
          "full_name": "Mars Descent Imager"
        },
        {
          "name": "RHAZ",
          "full_name": "Rear Hazard Avoidance Camera"
        }
      ]
    }
  },
  {
    "id": 1228214,
    "sol": 4102,
    "camera": {
      "id": 21,
      "name": "RHAZ",
      "rover_id": 5,
      "full_name": "Rear Hazard Avoidance Camera"
    },
    "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/04102/opgs/edr/rcam/RLB_761645951EDR_S1060660RHAZ00300M_.JPG",
    "earth_date": "2024-02-19",
    "rover": {
      "id": 5,
      "name": "Curiosity",
      "landing_date": "2012-08-06",
      "launch_date": "2011-11-26",
      "status": "active",
      "max_sol": 4102,
      "max_date": "2024-02-19",
      "total_photos": 695670,
      "cameras": [
        {
          "name": "FHAZ",
          "full_name": "Front Hazard Avoidance Camera"
        },
        {
          "name": "NAVCAM",
          "full_name": "Navigation Camera"
        },
        {
          "name": "MAST",
          "full_name": "Mast Camera"
        },
        {
          "name": "CHEMCAM",
          "full_name": "Chemistry and Camera Complex"
        },
        {
          "name": "MAHLI",
          "full_name": "Mars Hand Lens Imager"
        },
        {
          "name": "MARDI",
          "full_name": "Mars Descent Imager"
        },
        {
          "name": "RHAZ",
          "full_name": "Rear Hazard Avoidance Camera"
        }
      ]
    }
  }
];

export const mockSingleRoverPhoto: RoverPhoto = {
  id: 1228204,
  name: "Curiosity",
  roverName: "curiosity",
  imgSrc: "https://mars.nasa.gov/msl-raw-images/msss/04102/mhli/4102MH0001530001404334U01_DXXX.jpg",
  earthDate: "2024-02-19",
  sol: 4102,
  cameraName: "MAHLI",
  cameraFullName: "Mars Hand Lens Imager"
}