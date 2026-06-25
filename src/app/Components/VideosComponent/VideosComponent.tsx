"use client";

import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import "react-photo-album/styles.css";
import "yet-another-react-lightbox/styles.css";

import styles from "./Videos.module.css";
import { VideoInterface } from "@app-types/Videos";
import { generateVideoEmbedUrl, generateImageUrl } from "@Helper/function";

interface VideosComponentProps {
  readonly videos: readonly VideoInterface[];
}

export default function VideosComponent({ videos }: VideosComponentProps) {
  console.log(videos);

  const numberOfVideos: number = 6;
  const displayVideos = videos.slice(0, 8);
  const [index, setIndex] = useState(-1);

  return (
    <div className="container">
      <div className={styles.videos_section}>
        <div className={styles.section_title}>
          <div>
            <h2 className={styles.videos}>Videos</h2>
          </div>
          <div className={styles.show_all}>Show All</div>
        </div>

        <div className="row">
          {displayVideos.map((video, i) => (
            <div key={i} className="col-12 col-md-3">
              <div className={styles.video_item}>
                <img
                  src={generateImageUrl(video.key, "medium")}
                  alt=""
                  onClick={() => setIndex(i)}
                />
                {/* <iframe
                  width="560"
                  height="315"
                  src={generateVideoEmbedUrl(video.key)}
                  title="YouTube video player"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  // referrerpolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe> */}
                <div className={styles.play_button_area}>
                  <img
                    className={styles.play_button}
                    src="/play_button.svg"
                    alt=""
                    onClick={() => setIndex(i)}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* <div className="col-12 col-md-3">
            <div className={styles.video_item}>
              <img
                src={generateImageUrl(videos[3]?.key, "medium")}
                alt=""
                onClick={() => setIndex(i)}
              />

              <div className={styles.show_all}>Show All</div>
            </div>
          </div> */}
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
