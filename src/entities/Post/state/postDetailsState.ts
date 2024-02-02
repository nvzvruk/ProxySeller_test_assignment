import { create } from "zustand";
import { apiUrl } from "@/shared/config/api";
import { Post } from "../types";

interface PostDetailsState {
  post: null | Post;
  isLoading: boolean;
  fetchPost: (postId: string) => Promise<void>;
}

export const usePostDetailsState = create<PostDetailsState>((set) => ({
  post: null,
  isLoading: false,
  fetchPost: async (postId) => {
    try {
      set({ isLoading: true });
      const response = await fetch(`${apiUrl}/posts/${postId}`);
      const post = await response.json();
      set({ post, isLoading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
