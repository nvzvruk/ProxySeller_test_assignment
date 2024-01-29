import { lazy } from "react";

export const AlbumDetailsPageLazy = lazy(
  async () => import("./AlbumDetailsPage"),
);
