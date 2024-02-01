import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AlbumsTable, useAlbumsTableState } from "@/entities/Album";
import { PageHeading } from "@/shared/components/PageHeading";
import { PageLayout } from "@/shared/components/PageLayout";

export const AlbumsPage = () => {
  const { userId } = useParams();
  const { isLoading, albums, fetchAlbumsByUserId } = useAlbumsTableState();

  useEffect(() => {
    if (userId) {
      fetchAlbumsByUserId(userId);
    }
  }, []);

  return (
    <PageLayout>
      <PageHeading>User {userId} Albums</PageHeading>
      <AlbumsTable albums={albums} isLoading={isLoading} />
    </PageLayout>
  );
};

export default AlbumsPage;
