import { create } from "zustand";
import { Album } from "./types";

interface AlbumsState {
  albums: null | Album[];
  isLoading: boolean;
  fetchAlbumsByUserId: (id: string) => Promise<void>;
}

export const useAlbumsState = create<AlbumsState>((set) => ({
  albums: null,
  isLoading: false,
  fetchAlbumsByUserId: async (userId: string) => {
    try {
      set({ isLoading: true });
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}/albums`,
      );
      const albums = await response.json();
      set({ albums, isLoading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
