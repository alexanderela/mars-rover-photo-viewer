import { describe, expect, it } from "vitest";
import reducer, { 
  setPhotos, 
  setIsLoading, 
  setTotalPhotos, 
  handleSetRoverPhotos 
} from "./photoViewerSlice";
import { mockRoverPhotosState } from "../../../tests/mocks";

describe("photoViewerSlice", () => {
  describe("roverPhotosSlice", () => {
    const initialState = {
      photos: {},
      isLoading: false,
      totalPhotos: 0,
      error: "",
    };

    it("should return the initial state", () => {
      expect(reducer(undefined, { type: "unknown" })).toEqual(initialState);
    });

    it("should handle setting photos", () => {
      expect(reducer(initialState, setPhotos(mockRoverPhotosState))).toEqual({
        ...initialState,
        photos: mockRoverPhotosState,
      });
    });

    it("should handle setting loading state", () => {
      expect(reducer(initialState, setIsLoading(true))).toEqual({
        ...initialState,
        isLoading: true
      });
    });

    it("should handle setting total number of photos", () => {
      expect(reducer(initialState, setTotalPhotos(3))).toEqual({
        ...initialState,
        totalPhotos: 3
      });
    });
  });

  describe("handleSetRoverPhotos (thunk)", () => {
    it.skip("should handle setting photos, loading state, and total photos", () => {

    });
  });
});