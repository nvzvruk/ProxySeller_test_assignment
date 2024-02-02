import { memo } from "react";
import { Table, TableData } from "@/shared/components/Table";
import { AppLink } from "@/shared/components/AppLink";
import { Loader } from "@/shared/components/Loader";
import { Album } from "../types";

interface AlbumsTableProps {
  albums: Album[] | null;
  isLoading: boolean;
}

const headers = ["id", "title", "actions"];

const renderAlbumRow = (album: Album) => {
  return (
    <>
      <TableData>{album.id}</TableData>
      <TableData>{album.title}</TableData>
      <TableData>
        <AppLink path={`/albums/${album.id}`}>View</AppLink>
      </TableData>
    </>
  );
};

export const AlbumsTable = memo<AlbumsTableProps>(({ albums, isLoading }) => {
  if (isLoading) return <Loader />;
  if (albums)
    return <Table headers={headers} rows={albums} renderRow={renderAlbumRow} />;
});
