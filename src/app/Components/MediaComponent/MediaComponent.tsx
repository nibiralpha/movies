import { CrewMember, CrewRole, MovieDetails } from "@app-types/MovieDetails";
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

interface MovieHeaderProps {
  id: number;
  type: "movie";
  data: MovieDetails;
  videos: VideoInterface[];
}
interface TvShowHeaderProps {
  id: number;
  type: "tvShow";
  data: TvShowDetailsResponse;
  videos: VideoInterface[];
}

type HeaderComponentProps = MovieHeaderProps | TvShowHeaderProps;
export default function MediaComponent({
  id,
  type,
  data,
  videos,
}: Readonly<HeaderComponentProps>) {
  const [directorsData, setDirectorsData] = useState<string[]>([]);
  const [producerData, setProducerData] = useState<string[]>([]);
  const [writerData, setWriterData] = useState<string[]>([]);
  const [OfficialVideo, setOfficialVideo] = useState<VideoInterface | null>();

  useEffect(() => {
    const director = type == "movie" ? getMembers("Director", data) : getTvSeriesMembers("Director", data);
    const producer =type == "movie" ?  getMembers("Producer", data) : getTvSeriesMembers("Producer", data);
    const writer = type == "movie" ?  getMembers("Writer", data) : getTvSeriesMembers("Producer", data);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDirectorsData(director);
    setProducerData(producer);
    setWriterData(writer);

    const video = getOfficialVideo(videos);
    setOfficialVideo(video);
  }, [data, videos]);

  return (
    <div className="container">
      <div className={styles.media}>
        <div className={styles.left_img}>
          <img
            className={styles.img}
            width={"270px"}
            src={`${TMDB_IMAGE_BASE}/${data.poster_path}`}
          />
        </div>
        <div className={styles.right_video}>
          {OfficialVideo?.key ? (
            <iframe
              width="560"
              height="315"
              src={generateVideoEmbedUrl(OfficialVideo?.key)}
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
    </div>
  );
}
