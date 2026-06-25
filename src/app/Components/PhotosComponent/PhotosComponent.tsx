"use client";

import { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import "react-photo-album/styles.css";
import "yet-another-react-lightbox/styles.css";

import styles from "./Photos.module.css";
import { PhotoInterface } from "@app-types/Photos";
import { generateImageData } from "../../Helper/function";

interface photoSliderFormat {
  src: string;
  height: number;
  width: number
}

interface PhotosComponentProps {
  photos: PhotoInterface[];
}
export default function PhotosComponent({ photos }: PhotosComponentProps) {
  const [index, setIndex] = useState(-1);
  const [photosFormat, setPhotosFormat] = useState<photoSliderFormat[]>([]);

  useEffect(() => {
    const formattedPhotos = photos.map((photo) => ({
      src: generateImageData(photo.file_path, "w1280"),
      width: photo.width,
      height: photo.height
    }));

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPhotosFormat(formattedPhotos);
  }, [photos]);

  return (
    <div className="container">
      <div className={styles.photos_section}>
        <h2 className={styles.photos}>Photos</h2>

        <div className={styles.previewGrid}>
          {photos.slice(0, 7).map((photo, i) => (
            <img
              key={i}
              src={generateImageData(photo.file_path, "w500")}
              alt=""
              onClick={() => setIndex(i)}
            />
          ))}
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
