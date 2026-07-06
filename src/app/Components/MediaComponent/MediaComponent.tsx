import { MovieDetails } from "@app-types/MovieDetails";
import styles from "./Media.module.css";
import { TMDB_IMAGE_BASE } from "@Constant/ApiDataHelper";
import { useEffect, useState } from "react";
import {
  generateVideoEmbedUrl,
  getMembers,
  getTvSeriesMembers,
  getOfficialVideo,
} from "@Helper/function";
import { VideoInterface } from "@app-types/Videos";
import { TvShowDetailsResponse } from "@app-types/TvSeries";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface MovieHeaderProps {
  id: number;
  type: "movie";
  data: MovieDetails;
  videos: VideoInterface[];
  loading: boolean;
}
interface TvShowHeaderProps {
  id: number;
  type: "tvShow";
  data: TvShowDetailsResponse;
  videos: VideoInterface[];
  loading: boolean;
}

type HeaderComponentProps = MovieHeaderProps | TvShowHeaderProps;
export default function MediaComponent({
  id,
  type,
  data,
  videos,
  loading,
}: Readonly<HeaderComponentProps>) {
  const officialVideo = getOfficialVideo(videos);

  const directorsData =
    type === "movie"
      ? getMembers("Director", data)
      : getTvSeriesMembers("Director", data);

  const producerData =
    type === "movie"
      ? getMembers("Producer", data)
      : getTvSeriesMembers("Producer", data);

  const writerData =
    type === "movie"
      ? getMembers("Writer", data)
      : getTvSeriesMembers("Producer", data);

  return (
    <div className="container">
      <div className={styles.media}>
        <div className={styles.left_img}>
          {loading ? (
            <Skeleton width={270} height={350} />
          ) : (
            <img
              className={styles.img}
              width={"270px"}
              src={`${TMDB_IMAGE_BASE}/${data.poster_path}`}
            />
          )}
        </div>
        <div className={styles.right_video}>
          {loading ? (
            <Skeleton
              height={350}
              containerClassName={styles.skeleton_wrapper}
            />
          ) : officialVideo?.key ? (
            <iframe
              width="560"
              height="315"
              src={generateVideoEmbedUrl(officialVideo?.key)}
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <p>Loading trailer...</p>
          )}
        </div>
      </div>
      {!loading && (
        <div className={styles.detail_area}>
          <div className={styles.details}>{data.overview}</div>
          <div className={styles.writers}>
            <div className={styles.writers_name}>
              <div className={styles.position}>Director</div>
              <div className={styles.name}>{directorsData.join(", ")}</div>
            </div>
            <div className={styles.writers_name}>
              <div className={styles.position}>Producers</div>
              <div className={styles.name}>{producerData.join(", ")}</div>
            </div>
            <div className={styles.writers_name}>
              <div className={styles.position}>Writers</div>
              <div className={styles.name}>{writerData.join(", ")}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
