import { lazy } from "react";

export const PostsPageLazy = lazy(async () => import("./PostsPage"));
