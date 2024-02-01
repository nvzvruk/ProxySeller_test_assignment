import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostsTable, usePostsTableState } from "@/entities/Post";
import { PageHeading } from "@/shared/components/PageHeading";
import { PageLayout } from "@/shared/components/PageLayout";

export const PostsPage = () => {
  const { userId } = useParams();
  const { isLoading, posts, fetchPostsByUserId } = usePostsTableState();

  useEffect(() => {
    if (userId) {
      fetchPostsByUserId(userId);
    }
  }, []);

  return (
    <PageLayout>
      <PageHeading>User {userId} Posts</PageHeading>
      <PostsTable posts={posts} isLoading={isLoading} />
    </PageLayout>
  );
};

export default PostsPage;
