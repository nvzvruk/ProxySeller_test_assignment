import React, { memo } from "react";
import { Photo } from "../types";
import { PhotoFigure } from "@/entities/Photo/components/PhotoFigure";

interface PhotoGridProps {
  photos: Photo[] | null;
}

export const PhotoGrid = memo<PhotoGridProps>(({ photos }) => {
  return (
    photos && (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {photos.map((photo) => (
          <PhotoFigure key={photo.id} photo={photo} />
        ))}
      </div>
    )
  );
});
