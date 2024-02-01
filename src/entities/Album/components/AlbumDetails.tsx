import { type FC } from "react";
import { Album } from "@/entities/Album";
import { Loader } from "@/shared/components/Loader";

interface AlbumDetailsProps {
  album: Album | null;
  isLoading: boolean;
}

export const AlbumDetails: FC<AlbumDetailsProps> = ({ album, isLoading }) => {
  if (isLoading) return <Loader />;
  if (album)
    return (
      <>
        <h2 className="font-semibold">{album.title}</h2>
      </>
    );
};
