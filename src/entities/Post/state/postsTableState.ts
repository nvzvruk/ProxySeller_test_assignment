import { create } from "zustand";
import { Post } from "../types";
import { transformPostToTableData } from "../utils";

interface PostsTableState {
  posts: null | Post[];
  isLoading: boolean;
  fetchPostsByUserId: (userId: string) => Promise<void>;
}

export const usePostsTableState = create<PostsTableState>((set) => ({
  posts: null,
  isLoading: false,
  fetchPostsByUserId: async (userId) => {
    try {
      set({ isLoading: true });
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}/posts`,
      );
      const data = await response.json();
      const posts = data.map(transformPostToTableData);
      set({ posts, isLoading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
