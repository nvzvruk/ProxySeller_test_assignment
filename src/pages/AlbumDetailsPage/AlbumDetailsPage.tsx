import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AlbumDetails, useAlbumDetailsState } from "@/entities/Album";
import { PageLayout } from "@/shared/components/PageLayout";
import { PageHeading } from "@/shared/components/PageHeading";

export const AlbumDetailsPage = () => {
  const { albumId } = useParams();
  const { album, isLoading, fetchAlbum } = useAlbumDetailsState();

  useEffect(() => {
    if (albumId) {
      fetchAlbum(albumId);
    }
  }, []);

  return (
    <PageLayout>
      <PageHeading>Album {albumId}</PageHeading>
      <AlbumDetails album={album} isLoading={isLoading} />
    </PageLayout>
  );
};

export default AlbumDetailsPage;
