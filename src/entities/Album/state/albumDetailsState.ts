// TODO Move this to @/features/ to avoid import slice within same layer
import { create } from "zustand";
import { Photo } from "@/entities/Photo/types";
import { apiUrl } from "@/shared/config/api";
import { Album } from "../types";

interface AlbumDetailsState {
  album: null | Album;
  photos: null | Photo[];
  isLoading: boolean;
  fetchAlbum: (albumId: string) => Promise<void>;
}

export const useAlbumDetailsState = create<AlbumDetailsState>((set) => ({
  album: null,
  photos: null,
  isLoading: false,
  fetchAlbum: async (albumId: string) => {
    try {
      set({ isLoading: true });

      const [albumResponse, photosResponse] = await Promise.all([
        fetch(`${apiUrl}/albums/${albumId}`),
        fetch(`${apiUrl}/albums/${albumId}/photos`),
      ]);

      const album = await albumResponse.json();
      const photos = await photosResponse.json();

      set({ album, photos, isLoading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
