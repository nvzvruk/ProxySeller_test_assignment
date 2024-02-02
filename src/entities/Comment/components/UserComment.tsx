import { memo } from "react";
import { Comment } from "../types";

interface UserCommentProps {
  comment: Comment;
}

export const UserComment = memo<UserCommentProps>(({ comment }) => {
  return (
    <div className="p-4 bg-gray-100 rounded-md text-xs">
      <h3 className="text-sm font-semibold">{comment.name}</h3>
      <p className="text-gray-600">{comment.body}</p>
      <a href={`mailto:${comment.email}`} className="text-blue-500">
        {comment.email}
      </a>
    </div>
  );
});
