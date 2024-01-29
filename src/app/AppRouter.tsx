import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  getAlbumDetailsPath,
  getAlbumsPath,
  getPostDetailsPath,
  getPostsPath,
  RoutePaths,
} from "@/shared/config/routePaths";

const router = createBrowserRouter([
  {
    path: RoutePaths.Users,
    element: <div>Users List</div>,
  },
  {
    path: getAlbumsPath(":userId"),
    element: <div>User Albums</div>,
  },
  {
    path: getPostsPath(":userId"),
    element: <div>User Posts</div>,
  },
  {
    path: getAlbumDetailsPath(":albumId"),
    element: <div>Album details</div>,
  },
  {
    path: getPostDetailsPath(":postId"),
    element: <div>Post details</div>,
  },
  {
    path: RoutePaths.NotFound,
    element: <div>Not found</div>,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
