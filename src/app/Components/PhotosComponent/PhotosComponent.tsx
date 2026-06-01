"use client";

import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import "react-photo-album/styles.css";
import "yet-another-react-lightbox/styles.css";

import styles from "./Photos.module.css";

const photos = [
  {
    src: "/the-crew-portrait.webp",
    width: 1200,
    height: 800,
  },
  {
    src: "/the-crew-portrait.webp",
    width: 1200,
    height: 800,
  },
  {
    src: "/the-crew-portrait.webp",
    width: 1200,
    height: 800,
  },
  {
    src: "/the-crew-portrait.webp",
    width: 1200,
    height: 800,
  },
  {
    src: "/the-crew-portrait.webp",
    width: 1200,
    height: 800,
  },
  {
    src: "/the-crew-portrait.webp",
    width: 1200,
    height: 800,
  },
  {
    src: "/the-crew-portrait.webp",
    width: 1200,
    height: 800,
  },
];
export default function PhotosComponent() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="container">
      <div className={styles.photos_section}>
        <h2 className={styles.photos}>Photos</h2>

        <div className={styles.previewGrid}>
          {photos.map((photo, i) => (
            <img key={i} src={photo.src} alt="" onClick={() => setIndex(i)} />
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={photos}
        />
      </div>
    </div>
  );
}
