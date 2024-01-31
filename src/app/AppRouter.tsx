import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UsersPage } from "@/pages/UsersPage";
import { AlbumsPage } from "@/pages/AlbumsPage";
import { PostsPage } from "@/pages/PostsPage";
import { AlbumDetailsPage } from "@/pages/AlbumDetailsPage";
import { PostDetailsPage } from "@/pages/PostDetailsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import {
  getAlbumDetailsPath,
  getAlbumsPath,
  getPostDetailsPath,
  getPostsPath,
  RoutePath,
} from "@/shared/config/routePaths";

const router = createBrowserRouter([
  {
    path: RoutePath.Users,
    element: <UsersPage />,
  },
  {
    path: getAlbumsPath(":userId"),
    element: <AlbumsPage />,
  },
  {
    path: getPostsPath(":userId"),
    element: <PostsPage />,
  },
  {
    path: getAlbumDetailsPath(":albumId"),
    element: <AlbumDetailsPage />,
  },
  {
    path: getPostDetailsPath(":postId"),
    element: <PostDetailsPage />,
  },
  {
    path: RoutePath.NotFound,
    element: <NotFoundPage />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
