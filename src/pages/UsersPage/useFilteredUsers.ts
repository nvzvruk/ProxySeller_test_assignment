import { useMemo } from "react";
import { UserTableData } from "@/entities/User";

interface FilterParams {
  search: string;
  // TODO change order to union type ASC | DESC
  order: string;
}

type UseFilteredUsers = (
  users: UserTableData[] | null,
  { search, order }: FilterParams,
) => UserTableData[] | null;

export const useFilteredUsers: UseFilteredUsers = (
  users,
  { order, search },
) => {
  return useMemo(() => {
    if (users) {
      let filteredUsers = users;

      if (search.trim() !== "") {
        filteredUsers = users.filter((user) =>
          user.username.toLowerCase().startsWith(search.toLowerCase()),
        );
      }

      if (order.toLowerCase() === "asc") {
        filteredUsers.sort((a, b) => a.username.localeCompare(b.username));
      } else if (order.toLowerCase() === "desc") {
        filteredUsers.sort((a, b) => b.username.localeCompare(a.username));
      }

      return filteredUsers;
    }

    return null;
  }, [users, order, search]);
};
