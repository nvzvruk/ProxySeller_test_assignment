import { lazy } from "react";

export const UsersPageLazy = lazy(async () => import("./UsersPage"));
