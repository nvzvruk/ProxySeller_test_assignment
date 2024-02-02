import { memo } from "react";
import { CommentsList, Comment } from "@/entities/Comment";
import { Loader } from "@/shared/components/Loader";
import { Post } from "../types";

interface PostDetailsProps {
  post: Post | null;
  comments: Comment[] | null;
  isLoading: boolean;
}

export const PostDetails = memo<PostDetailsProps>(
  ({ post, isLoading, comments }) => {
    if (isLoading) return <Loader />;
    if (post)
      return (
        <div className="p-4 mx-auto">
          <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-4">{post.body}</p>
          <div className="mt-4 flex flex-col gap-2">
            <h3 className="font-semibold">Comments</h3>
            <CommentsList comments={comments} />
          </div>
        </div>
      );
  },
);
