import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import * as API from "./API";
import { cleanup } from "@testing-library/react";
import { RoverPhotoRaw } from "./types";
import { mockRoverPhotosFormatted, mockRoverPhotosRaw, mockRoverPhotosState } from "../tests/mocks";

describe("<API />", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  describe("fetchRoverPhotoData()", () => {
    beforeEach(() => {
      window.fetch = vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ latest_photos: [] })
      })
    });

    it("calls fetch with correct parameters", () => {
      const url = "https://api.nasa.gov/mars-photos/api/v1";
      API.fetchRoverPhotoData({ url });
      expect(window.fetch).toHaveBeenCalledWith(url, {});
    });

    it("returns JSON response from fetch",async () => {
      const url = "https://api.nasa.gov/mars-photos/api/v1";
      const expected: RoverPhotoRaw[] = [];
      const response = await API.fetchRoverPhotoData({ url });
      expect(response).toEqual(expected);
    });    
  });

  describe("fetchRoverPhotos()", () => {
    it("fetches formatted rover photos", async () => {
      window.fetch = vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ latest_photos: mockRoverPhotosRaw })
      })
      const url = "https://api.nasa.gov/mars-photos/api/v1";
      const result = await API.fetchRoverPhotos({ url });
      expect(result).toEqual(mockRoverPhotosState);
    });
    
  });

  describe("fetchTotalNumberOfRoverPhotos()", () => {
    it("fetches total number of rover photos", async () => {
      window.fetch = vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ latest_photos: mockRoverPhotosRaw })
      })
      const url = "https://api.nasa.gov/mars-photos/api/v1";
      const result = await API.fetchTotalNumberOfRoverPhotos({ url });
      expect(result).toEqual(3);
    });
  });

  describe("formatRoverPhotosData()", () => {
    it("returns formatted rover photos", async () => {
      const response = await API.formatRoverPhotosData(mockRoverPhotosRaw);
      expect(response).toEqual(mockRoverPhotosFormatted);
    });
    
  });
});