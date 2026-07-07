"use client";

import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import "react-photo-album/styles.css";
import "yet-another-react-lightbox/styles.css";

import styles from "./Photos.module.css";
import { PhotoInterface } from "@app-types/Photos";
import { generateImageData } from "@Helper/function";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
interface PhotoSliderFormat {
  src: string;
  height: number;
  width: number;
}

interface PhotosComponentProps {
  photos: PhotoInterface[];
  loading: boolean;
}
export default function PhotosComponent({
  photos,
  loading,
}: Readonly<PhotosComponentProps>) {
  const [index, setIndex] = useState(-1);
  const [photosFormat, setPhotosFormat] = useState<PhotoSliderFormat[]>([]);

  useEffect(() => {
    const formattedPhotos = photos.map((photo) => ({
      src: generateImageData(photo.file_path, "w500"),
      width: photo.width,
      height: photo.height,
    }));

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPhotosFormat(formattedPhotos);
  }, [photos]);

  return (
    <div className="container">
      <div className={styles.photos_section}>
        <h2 className={styles.photos}>Photos</h2>

        <div className={styles.previewGrid}>
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div className="w-full flex-1" key={i}>
                <Skeleton height={180} containerClassName="w-full flex-1" />
              </div>
            ))
          ) : photos.length === 0 ? (
            <p className={styles.no_data}>No data available to display.</p>
          ) : (
            photos
              .slice(0, 7)
              .map((photo, i) => (
                <img
                  key={i}
                  src={generateImageData(photo.file_path, "w500")}
                  alt=""
                  onClick={() => setIndex(i)}
                />
              ))
          )}
        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={photosFormat}
        />
      </div>
    </div>
  );
}
