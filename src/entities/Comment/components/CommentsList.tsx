// TODO Move this to @/features/ to avoid import slice within same layer
import { memo } from "react";
import { Comment } from "@/entities/Comment";
import { UserComment } from "./UserComment";

interface CommentsListProps {
  comments: Comment[] | null;
}

export const CommentsList = memo<CommentsListProps>(({ comments }) => {
  return (
    comments && (
      <>
        {comments.map((comment) => (
          <UserComment
            key={`${comment.id}-${comment.name}`}
            comment={comment}
          />
        ))}
      </>
    )
  );
});
