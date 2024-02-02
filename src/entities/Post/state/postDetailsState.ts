// TODO Move this to @/features/ to avoid import slice within same layer
import { create } from "zustand";
import { Comment } from "@/entities/Comment";
import { apiUrl } from "@/shared/config/api";
import { Post } from "../types";

interface PostDetailsState {
  post: null | Post;
  comments: null | Comment[];
  isLoading: boolean;
  fetchPost: (postId: string) => Promise<void>;
}

export const usePostDetailsState = create<PostDetailsState>((set) => ({
  post: null,
  comments: null,
  isLoading: false,
  fetchPost: async (postId) => {
    try {
      set({ isLoading: true });

      const [postResponse, commentsResponse] = await Promise.all([
        fetch(`${apiUrl}/posts/${postId}`),
        fetch(`${apiUrl}/posts/${postId}/comments`),
      ]);

      const post = await postResponse.json();
      const comments = await commentsResponse.json();

      set({ post, comments, isLoading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
