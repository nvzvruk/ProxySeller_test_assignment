import { create } from "zustand";
import { Album } from "../types";

interface AlbumDetailsState {
  album: null | Album;
  isLoading: boolean;
  fetchAlbum: (albumId: string) => Promise<void>;
}

export const useAlbumDetailsState = create<AlbumDetailsState>((set) => ({
  album: null,
  isLoading: false,
  fetchAlbum: async (albumId: string) => {
    try {
      set({ isLoading: true });
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${albumId}`,
      );
      const album = await response.json();
      set({ album, isLoading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
