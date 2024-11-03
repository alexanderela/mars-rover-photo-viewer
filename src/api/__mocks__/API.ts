import { vi } from "vitest";
import { mockRoverPhotosRaw } from "../../tests/mocks";

export const fetchRoverPhotoData = vi.fn().mockResolvedValue(mockRoverPhotosRaw);