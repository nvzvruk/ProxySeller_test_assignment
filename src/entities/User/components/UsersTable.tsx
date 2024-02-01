import { type FC } from "react";
import { Table, TableData } from "@/shared/components/Table";
import { AvatarPlaceholder } from "@/shared/components/AvatarPlaceholder";
import { AppLink } from "@/shared/components/AppLink";
import { Loader } from "@/shared/components/Loader";
import { UserTableData } from "../types";

interface UsersTableProps {
  users: UserTableData[] | null;
  isLoading: boolean;
}

const headers = ["avatar", "username", "email", "company", "actions"];

const renderUserRow = (user: UserTableData) => {
  return (
    <>
      <TableData>
        <AvatarPlaceholder name={user.name} />
      </TableData>
      <TableData>{user.username}</TableData>
      <TableData>{user.email}</TableData>
      <TableData>{user.company}</TableData>
      <TableData>
        <div className="flex gap-2">
          <AppLink path={`${user.id}/albums`}>Albums</AppLink>|
          <AppLink path={`${user.id}/posts`}>Posts</AppLink>
        </div>
      </TableData>
    </>
  );
};

export const UsersTable: FC<UsersTableProps> = ({ users, isLoading }) => {
  if (isLoading) return <Loader />;
  if (users)
    return <Table headers={headers} rows={users} renderRow={renderUserRow} />;
};
