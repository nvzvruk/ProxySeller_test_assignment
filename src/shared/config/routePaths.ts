export enum RoutePath {
  Users = "/",
  Albums = "/albums",
  Posts = "/posts",
  NotFound = "*",
}

export const getAlbumsPath = (id: string): string => `${id}${RoutePath.Albums}`;
export const getPostsPath = (id: string): string => `${id}${RoutePath.Posts}`;

export const getAlbumDetailsPath = (id: string): string =>
  `${RoutePath.Albums}/${id}`;
export const getPostDetailsPath = (id: string): string =>
  `${RoutePath.Posts}/${id}`;
