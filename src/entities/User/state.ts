import { create } from "zustand";
import { UserTableData } from "./types";
import { transformUserToTableData } from "./utils";

interface UsersState {
  users: null | UserTableData[];
  isLoading: boolean;
  fetchUsers: () => Promise<void>;
}

export const useUsersState = create<UsersState>((set) => ({
  users: null,
  isLoading: false,
  fetchUsers: async () => {
    try {
      set({ isLoading: true });
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      const users = data.map(transformUserToTableData);
      set({ users, isLoading: false });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
}));
