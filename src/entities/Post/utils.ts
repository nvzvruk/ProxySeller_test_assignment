import { Post } from "./types";

export const transformPostToTableData = (post: Post): Post => ({
  ...post,
  body: post.body.slice(0, 50) + "...",
});
