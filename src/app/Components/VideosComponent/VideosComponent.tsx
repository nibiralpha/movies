"use client";

import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import "react-photo-album/styles.css";
import "yet-another-react-lightbox/styles.css";

import styles from "./Videos.module.css";
import { VideoInterface } from "@app-types/Videos";
import { generateVideoEmbedUrl, generateImageUrl } from "@Helper/function";

interface VideosComponentProps {
  videos: VideoInterface[];
}

export default function VideosComponent({ videos }: VideosComponentProps) {
  // const displayVideos = videos.slice(0, 8);
  const numberOfVideosToShow: number = 8;
  const [showAllButton, setShowAllButton] = useState<boolean>(false);
  const [showigVideos, setShowingVideos] =
    useState<number>(numberOfVideosToShow);
  const [displayVideos, setDisplayVideos] = useState<VideoInterface[]>([]);

  const [index, setIndex] = useState(-1);

  const showAll = () => {
    setShowingVideos(videos.length);
    setShowAllButton(true);
  };

  const hideAll = () => {
    setShowingVideos(numberOfVideosToShow);
    setShowAllButton(false);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDisplayVideos(videos);
  }, [videos]);

  return (
    <div className="container">
      <div className={styles.videos_section}>
        <div className={styles.section_title}>
          <div>
            <h2 className={styles.videos}>Videos</h2>
          </div>
          {videos.length > numberOfVideosToShow && (
            <div
              onClick={showAllButton == true ? hideAll : showAll}
              className={styles.show_all}
            >
              {showAllButton ? "Hide All" : "Show All"}
            </div>
          )}
        </div>

        <div className="row">
          {displayVideos.slice(0, showigVideos).map((video, i) => (
            <div key={i} className="col-12 col-md-3">
              <div key={video.id} className={styles.video_item}>
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
        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          // @ts-expect-error unknow type
          slides={videos}
          render={{
            // @ts-expect-error unknown type
            slide: ({ slide, index: slideIndex, carousel }) => {
              const currentIndex = carousel?.index;

              const isActive = slideIndex === currentIndex;

              return (
                <div
                  style={{
                    width: "100%",
                    maxWidth: "800px",
                    aspectRatio: "16/9",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {isActive ? (
                    <iframe
                      width="100%"
                      height="100%"
                      // @ts-expect-error uknow type
                      src={generateVideoEmbedUrl(slide.key)}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{ border: "none" }}
                    />
                  ) : (
                    <div>Loading video...</div>
                  )}
                </div>
              );
            },
          }}
        />
      </div>
    </div>
  );
}
