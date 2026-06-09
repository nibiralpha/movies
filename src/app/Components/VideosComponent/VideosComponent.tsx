"use client";

import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import "react-photo-album/styles.css";
import "yet-another-react-lightbox/styles.css";

import styles from "./Videos.module.css";

const videos = [
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
export default function VideosComponent() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="container">
      <div className={styles.videos_section}>
        <h2 className={styles.videos}>Videos</h2>

        <div className="row">
          {videos.map((video, i) => (
            <div key={i} className="col-12 col-md-3">
              <div className={styles.video_item}>
                <img src={video.src} alt="" onClick={() => setIndex(i)} />
                <div className={styles.play_button_area}>
                  <img
                    className={styles.play_button}
                    src="/play_button.svg"
                    alt=""
                    onClick={() => setIndex(i)}
                  />
                  <div>Trailer: 2.25</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={videos}
        />
      </div>
    </div>
  );
}
