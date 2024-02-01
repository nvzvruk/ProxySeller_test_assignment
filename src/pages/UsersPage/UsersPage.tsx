import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { UsersTable, SearchUsers, useUsersState } from "@/entities/User";
import { PageLayout } from "@/shared/components/PageLayout";
import { PageHeading } from "@/shared/components/PageHeading";
// import { useDebouncedValue } from "@/shared/hooks/useDebouncedValue";

export const UsersPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const orderQuery = searchParams.get("order");

  const [order, setOrder] = useState(orderQuery || "ASC");
  const [username, setUsername] = useState(searchQuery || "");
  // const debouncedQuery = useDebouncedValue(username, 500);

  const { users, isLoading, fetchUsers } = useUsersState();

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUsername(value);
    // update search param
  }, []);

  const handleOrderChange = useCallback((option: string) => {
    setOrder(option);
    // update search param
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <PageLayout>
      <PageHeading>Users</PageHeading>
      <SearchUsers
        searchValue={username}
        orderValue={order}
        onSearchChange={handleSearchChange}
        onOrderChange={handleOrderChange}
      />
      <UsersTable users={users} isLoading={isLoading} />
    </PageLayout>
  );
};

export default UsersPage;
