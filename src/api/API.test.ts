import { afterEach, describe, expect, it, vi } from "vitest";
import * as API from "./API";
import { cleanup } from "@testing-library/react";
import { RoverPhotoRaw } from "./types";
import { mockRoverPhotosFormatted, mockRoverPhotosRaw, mockRoverPhotosState } from "../tests/mocks";

describe("<API />", () => {
  const url = "https://api.nasa.gov/mars-photos/api/v1";

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  describe("fetchRoverPhotoData()", () => {
    it("calls fetch with correct parameters", () => {
      window.fetch = vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ latest_photos: [] })
      });

      API.fetchRoverPhotoData({ url });
      expect(window.fetch).toHaveBeenCalledWith(url, {});
    });

    it("returns JSON response from fetch", async () => {
      window.fetch = vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ latest_photos: [] })
      });

      const expected: RoverPhotoRaw[] = [];
      const response = await API.fetchRoverPhotoData({ url });
      expect(response).toEqual(expected);
    });    

    it("handles errors correctly", async () => {
      const expected = "An error occurred."
      window.fetch = vi.fn().mockRejectedValue(expected);
      await expect(API.fetchRoverPhotoData({ url })).rejects.toThrow(expected)
    });
  });

  describe("fetchRoverPhotos()", () => {
    it("fetches formatted rover photos", async () => {
      window.fetch = vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ latest_photos: mockRoverPhotosRaw })
      });
      const result = await API.fetchRoverPhotos({ url });
      expect(result).toEqual(mockRoverPhotosState);
    });

    it("handles errors correctly", async () => {
      const expected = "An error occurred."
      window.fetch = vi.fn().mockRejectedValue(expected);
      await expect(API.fetchRoverPhotos({ url })).rejects.toThrow(expected);
    });
  });

  describe("fetchTotalNumberOfRoverPhotos()", () => {
    it("fetches total number of rover photos", async () => {
      window.fetch = vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ latest_photos: mockRoverPhotosRaw })
      })
      const result = await API.fetchTotalNumberOfRoverPhotos({ url });
      expect(result).toEqual(3);
    });

    it("handles errors correctly", async () => {
      const expected = "An error occurred."
      window.fetch = vi.fn().mockRejectedValue(expected);
      await expect(API.fetchTotalNumberOfRoverPhotos({ url })).rejects.toThrow(expected);
    });
  });

  describe("formatRoverPhotosData()", () => {
    it("returns formatted rover photos", async () => {
      const response = await API.formatRoverPhotosData(mockRoverPhotosRaw);
      expect(response).toEqual(mockRoverPhotosFormatted);
    });
    
    it("handles errors correctly", async () => {
      const expected = "roverPhotos.map is not a function"
      window.fetch = vi.fn().mockRejectedValue(expected);
      const spy = vi.spyOn(API, "formatRoverPhotosData").mockRejectedValue(expected);
      expect(spy).rejects.toThrow(expected);
    });
  });
});