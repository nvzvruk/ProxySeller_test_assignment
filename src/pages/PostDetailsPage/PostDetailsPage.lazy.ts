import { lazy } from "react";

export const PostDetailsPageLazy = lazy(
  async () => import("./PostDetailsPage"),
);
