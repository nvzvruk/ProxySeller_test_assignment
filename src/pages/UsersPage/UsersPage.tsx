import { useEffect } from "react";
import { UsersTable, useUsersState } from "@/entities/User";
import { PageLayout } from "@/shared/components/PageLayout";
import { PageHeading } from "@/shared/components/PageHeading";

export const UsersPage = () => {
  const { users, isLoading, fetchUsers } = useUsersState();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <PageLayout>
      <PageHeading>Users</PageHeading>
      <UsersTable users={users} isLoading={isLoading} />
    </PageLayout>
  );
};

export default UsersPage;
