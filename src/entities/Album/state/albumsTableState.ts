import { create } from "zustand";
import { apiUrl } from "@/shared/config/api";
import { Album } from "../types";

interface AlbumsTableState {
  albums: null | Album[];
  isLoading: boolean;
  fetchAlbumsByUserId: (userId: string) => Promise<void>;
}

export const useAlbumsTableState = create<AlbumsTableState>((set) => ({
  albums: null,
  isLoading: false,
  fetchAlbumsByUserId: async (userId: string) => {
    try {
      set({ isLoading: true });
      const response = await fetch(`${apiUrl}/users/${userId}/albums`);
      const albums = await response.json();
      set({ albums, isLoading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
