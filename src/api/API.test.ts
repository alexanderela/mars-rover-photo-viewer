import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import * as API from "./API";
import { cleanup } from "@testing-library/react";
import { RoverPhotoRaw } from "./types";

describe("<API />", () => {
  describe("fetchRoverPhotoData()", () => {
    beforeEach(() => {
      window.fetch = vi.fn().mockResolvedValue({
        json: () => Promise.resolve({ latest_photos: [] })
      })
    });

    afterEach(() => {
      cleanup();
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

  describe("fetchRoverPhotoData()", () => {
    it.skip("fetches formatted rover photos", () => {
      
    });
    
  });

  describe("fetchRoverPhotoData()", () => {
    it.skip("fetches total number of rover photos", () => {
      
    });
    
  });

  describe("fetchRoverPhotoData()", () => {
    it.skip("returns formatted rover photos", () => {
      
    });
    
  });
});