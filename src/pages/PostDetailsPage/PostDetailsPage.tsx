import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostDetails, usePostDetailsState } from "@/entities/Post";
import { PageLayout } from "@/shared/components/PageLayout";
import { PageHeading } from "@/shared/components/PageHeading";

export const PostDetailsPage = () => {
  const { postId } = useParams();
  const { post, isLoading, fetchPost } = usePostDetailsState();

  useEffect(() => {
    if (postId) {
      fetchPost(postId);
    }
  }, []);

  return (
    <PageLayout>
      <PageHeading>Post {postId}</PageHeading>
      <PostDetails post={post} isLoading={isLoading} />
    </PageLayout>
  );
};

export default PostDetailsPage;
