import { memo } from "react";
import { Photo } from "../types";

interface PhotoFigureProps {
  photo: Photo;
}

export const PhotoFigure = memo<PhotoFigureProps>(({ photo }) => {
  const { title, thumbnailUrl, albumId } = photo;

  return (
    <figure className="overflow-hidden rounded-lg shadow-md flex flex-col">
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <figcaption className="flex flex-col justify-between grow p-2">
        <h3 className="text-xs font-semibold">{title}</h3>
        <p className="text-xs text-gray-600">{`Album ID: ${albumId}`}</p>
      </figcaption>
    </figure>
  );
});
