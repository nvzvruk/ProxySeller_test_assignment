export enum RoutePaths {
  Users = "/",
  Albums = "/albums",
  Posts = "/posts",
  NotFound = "*",
}

export const getAlbumsPath = (id: string): string =>
  `${id}${RoutePaths.Albums}`;
export const getPostsPath = (id: string): string => `${id}${RoutePaths.Posts}`;

export const getAlbumDetailsPath = (id: string): string =>
  `${RoutePaths.Albums}/${id}`;
export const getPostDetailsPath = (id: string): string =>
  `${RoutePaths.Posts}/${id}`;
