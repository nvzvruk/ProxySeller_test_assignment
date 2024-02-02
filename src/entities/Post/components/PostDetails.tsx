import { memo } from "react";
import { Loader } from "@/shared/components/Loader";
import { Post } from "../types";

interface PostDetailsProps {
  post: Post | null;
  isLoading: boolean;
}

export const PostDetails = memo<PostDetailsProps>(({ post, isLoading }) => {
  if (isLoading) return <Loader />;
  if (post)
    return (
      <>
        <h2 className="font-semibold">{post.title}</h2>
        <p>{post.body}</p>
      </>
    );
});
