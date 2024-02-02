import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { UsersTable, SearchUsers, useUsersState } from "@/entities/User";
import { PageLayout } from "@/shared/components/PageLayout";
import { PageHeading } from "@/shared/components/PageHeading";
import { useFilteredUsers } from "@/pages/UsersPage/useFilteredUsers";

export const UsersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [order, setOrder] = useState(searchParams.get("order") || "ASC");

  const { users, isLoading, fetchUsers } = useUsersState();
  const filteredUsers = useFilteredUsers(users, { search, order });

  // TODO: Refactor handlers to eliminate the need to pass rest params in deps
  const handleSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setSearch(value);
      setSearchParams({ search: value, order });
    },
    [order],
  );

  const handleOrderChange = useCallback(
    (value: string) => {
      setOrder(value);
      setSearchParams({ search, order: value });
    },
    [search],
  );

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <PageLayout>
      <PageHeading>Users</PageHeading>
      <SearchUsers
        searchValue={search}
        orderValue={order}
        onSearchChange={handleSearchChange}
        onOrderChange={handleOrderChange}
      />
      <UsersTable users={filteredUsers} isLoading={isLoading} />
    </PageLayout>
  );
};

export default UsersPage;
