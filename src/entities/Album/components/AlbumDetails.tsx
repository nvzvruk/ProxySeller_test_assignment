// TODO Move this to @/features/ to avoid import slice within same layer
import { memo } from "react";
import { Album } from "@/entities/Album";
import { PhotoGrid, Photo } from "@/entities/Photo";
import { Loader } from "@/shared/components/Loader";

interface AlbumDetailsProps {
  album: Album | null;
  photos: Photo[] | null;
  isLoading: boolean;
}

export const AlbumDetails = memo<AlbumDetailsProps>(
  ({ album, isLoading, photos }) => {
    if (isLoading) return <Loader />;
    if (album)
      return (
        <>
          <h2 className="font-semibold">{album.title}</h2>
          <PhotoGrid photos={photos} />
        </>
      );
  },
);
