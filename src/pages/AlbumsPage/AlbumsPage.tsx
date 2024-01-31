import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AlbumsTable, useAlbumsState } from "@/entities/Album";
import { PageHeading } from "@/shared/components/PageHeading";
import { PageLayout } from "@/shared/components/PageLayout";

export const AlbumsPage = () => {
  const { userId } = useParams();
  const { isLoading, albums, fetchAlbumsByUserId } = useAlbumsState();

  useEffect(() => {
    if (userId) {
      fetchAlbumsByUserId(userId);
    }
  }, []);

  return (
    <PageLayout>
      <PageHeading>User {userId} albums</PageHeading>
      <AlbumsTable albums={albums} isLoading={isLoading} />
    </PageLayout>
  );
};

export default AlbumsPage;
