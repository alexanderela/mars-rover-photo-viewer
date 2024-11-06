import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RoverPhoto, RoverPhotoStateObj } from "../../../types/common";
import { addFavoritePhoto, deleteAllFavoritePhotos, deleteFavoritePhoto, fetchRoverPhotos, fetchTotalNumberOfRoverPhotos, getFavoritesPhotos } from "../../../api/API";
import { HandleSetRoverPhotosProps } from "../../../api/types";

const initialState = {
  photos: {},
  isLoading: false,
  totalPhotos: 0,
  error: "",
};

export interface State {
  photos: RoverPhotoStateObj;
  isLoading: boolean;
  totalPhotos: number;
  error: string;
}

const defaultSetRoverPhotosError = "Photo request failed.  Please check URL and try again.";

/** The following thunk is built using the pattern currently recommended by Redux docs */
export const handleSetRoverPhotos = createAsyncThunk("roverPhotos/setPhotos", async ({ rover, page }: HandleSetRoverPhotosProps) => {
  /* NASA's Mars Rover API unfortunately does not return total count.  Therefore,
      separate async requests are necessary for getting the total photo count and the 25 photos
      we want for any given pagination step. 
      */
  const totalPhotosUrl: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/latest_photos?&api_key=${import.meta.env.VITE_NASA_API_KEY}`;
  const totalPhotos = await fetchTotalNumberOfRoverPhotos({ url: totalPhotosUrl });

  const roverPhotosUrl: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/latest_photos?page=${page || "1"}&api_key=${import.meta.env.VITE_NASA_API_KEY}`;
  const photos = await fetchRoverPhotos({ url: roverPhotosUrl });

  await deleteAllFavoritePhotos();

  return { photos, totalPhotos };
});

export const handleToggleRoverPhotoFavorites = createAsyncThunk("roverPhotos/setFavorites", async (photo: RoverPhoto) => {
  if(photo.isFavorite !== null || photo.isFavorite) {
    photo = { ...photo, isFavorite: false };
    await deleteFavoritePhoto(photo.id);
  } else if(photo.isFavorite === null || !photo.isFavorite) {
    photo = { ...photo, isFavorite: true };
    await addFavoritePhoto(photo);
  }
  return { photo };
});

export const handleGetRoverPhotoFavorites = createAsyncThunk("roverPhotos/getFavorites", async () => {
  return await getFavoritesPhotos();
});

export const roverPhotosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleSetRoverPhotos.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(handleSetRoverPhotos.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || defaultSetRoverPhotosError;
    });

    builder.addCase(handleSetRoverPhotos.fulfilled, (state, action) => {
      const { photos, totalPhotos } = action.payload;
      state.photos = photos;
      state.totalPhotos = totalPhotos;
      state.isLoading = false;
    });
    builder.addCase(handleToggleRoverPhotoFavorites.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || defaultSetRoverPhotosError;
    });
    builder.addCase(handleToggleRoverPhotoFavorites.fulfilled, (state, action) => {
      const { photo } = action.payload;
      state.photos = {
        ...state.photos,
        [photo.id]: photo
      };
    });
  }
});

export default roverPhotosSlice.reducer;

/**
The following functions use the more 'classic' thunk pattern and corresponding createSlice() call 
 */

// export const roverPhotosSlice = createSlice({
//   name: "photos",
//   initialState,
//   reducers: {
//     setPhotos: (state, action: PayloadAction<RoverPhotoStateObj>): State => {
//       state.photos = action.payload;
//       return state;
//     },
//     setIsLoading: (state, action: PayloadAction<boolean>): State => {
//       state.isLoading = action.payload;
//       return state;
//     },
//     setTotalPhotos: (state, action: PayloadAction<number>): State => {
//       state.totalPhotos = action.payload;
//       return state;
//     },
//     setError: (state, action: PayloadAction<string>): State => {
//       state.error = action.payload;
//       return state
//     }
//   }
// });

// export const handleSetRoverPhotosOLD = ({ rover, page }: HandleSetRoverPhotosProps): AppThunk => {
//   return async (dispatch) => {
//     try {
//       dispatch(setIsLoading(true));

//       /* NASA's Mars Rover API unfortunately does not return total count.  Therefore,
//       separate async requests are necessary for getting the total photo count and the 25 photos
//       we want for any given pagination step. 
//       */
//       const totalPhotosUrl: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/latest_photos?&api_key=${import.meta.env.VITE_NASA_API_KEY}`;
//       const totalNumberOfRoverPhotos = await fetchTotalNumberOfRoverPhotos({ url: totalPhotosUrl });
//       dispatch(setTotalPhotos(totalNumberOfRoverPhotos));

//       const roverPhotosUrl: string = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/latest_photos?page=${page || "1"}&api_key=${import.meta.env.VITE_NASA_API_KEY}`;
//       const roverPhotos = await fetchRoverPhotos({ url: roverPhotosUrl });
//       dispatch(setPhotos(roverPhotos));

//       dispatch(setIsLoading(false));
//       dispatch(setError(""));
//     } catch(error) {
//       console.warn(error);
//       dispatch(setError(defaultSetRoverPhotosError))
//     }
//   }
// };

// export const { setPhotos, setIsLoading, setTotalPhotos, setError } = roverPhotosSlice.actions;
