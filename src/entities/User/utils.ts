import { User, UserTableData } from "./types";

export const transformUserToTableData = ({
  id,
  name,
  username,
  email,
  company,
}: User): UserTableData => ({
  id,
  name,
  username,
  email,
  company: company.name,
});
