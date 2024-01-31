import { type FC } from "react";
import { Table, TableData } from "@/shared/components/Table";
import { AppLink } from "@/shared/components/AppLink";
import { Loader } from "@/shared/components/Loader";
import { Post } from "./types";

interface PostsTableProps {
  posts: Post[] | null;
  isLoading: boolean;
}

const headers = ["id", "title", "body", "actions"];

const renderPostRow = (post: Post) => {
  return (
    <>
      <TableData>{post.id}</TableData>
      <TableData>{post.title}</TableData>
      <TableData>{post.body}</TableData>
      <TableData>
        <AppLink path={`/posts/${post.id}`}>View</AppLink>
      </TableData>
    </>
  );
};

export const PostsTable: FC<PostsTableProps> = ({ posts, isLoading }) => {
  if (isLoading) return <Loader />;
  if (posts)
    return <Table headers={headers} rows={posts} renderRow={renderPostRow} />;
};
