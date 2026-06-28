import { CrewMember, CrewRole, MovieDetails } from "@app-types/MovieDetails";
import styles from "./Media.module.css";
import { TMDB_IMAGE_BASE } from "@Constant/ApiDataHelper";
import { useEffect, useState } from "react";

import { CelebrityDetailResponse } from "@app-types/Celebrity";
import { truncateDetails } from "@Helper/function";

interface CelebrityHeaderProps {
  id: number;
  data: CelebrityDetailResponse;
  //   videos: VideoInterface[];
}

type HeaderComponentProps = CelebrityHeaderProps;
export default function CelebrityMediaComponent({
  id,
  data,
  //   videos,
}: Readonly<HeaderComponentProps>) {
  //   const [OfficialVideo, setOfficialVideo] = useState<VideoInterface | null>();

  //   useEffect(() => {
  //     const writer =
  //       type === "celebrity"
  //         ? null
  //         : type === "movie"
  //           ? getMembers("Writer", data)
  //           : getTvSeriesMembers("Writer", data);
  //     eslint-disable-next-line react-hooks/set-state-in-effect
  //     const video = getOfficialVideo(videos);
  //     setOfficialVideo(video);
  //   }, [data]);

  return (
    <div className="container">
      <div className={styles.media}>
        <div className={styles.left_img}>
          <img
            className={styles.img}
            src={`${TMDB_IMAGE_BASE}/${data.profile_path}`}
          />
        </div>
        <div className={styles.right_content}>
          {/* <div className={styles.bottom}>
            <div className={styles.right_content_name}>Tom Cruise</div>
            <div className={styles.point}>Acting</div>
          </div> */}
          <div className={styles.right_area}>
            <div className={styles.right_side_content}>
              <div className={styles.point}>Born</div>
              <div className={styles.right_side_detail}>November 11, 1999</div>
            </div>
            <div className={styles.right_side_content}>
              <div className={styles.point}>Age</div>
              <div className={styles.right_side_detail}>49 years old</div>
            </div>
            <div className={styles.right_side_content}>
              <div className={styles.point}>Birthplace</div>
              <div className={styles.right_side_detail}>
                Los Angels, California, USA
              </div>
            </div>
            <div className={styles.right_side_content}>
              <div className={styles.point}>Nationality</div>
              <div className={styles.right_side_detail}>American</div>
            </div>
            <div className={styles.right_side_content}>
              <div className={styles.point}>Height</div>
              <div className={styles.right_side_detail}>1.83 m</div>
            </div>
            <div className={styles.right_side_content}>
              <div className={styles.point}>Also know as</div>
              <div className={styles.right_side_detail}>Leo DiCaprio</div>
            </div>
            <div className={styles.right_side_content}>
              <div className={styles.point}>Years active</div>
              <div className={styles.right_side_detail}>1990 - preasent</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.detail_area}>
        <div className={styles.details}>
          {truncateDetails(data.biography, 300)}
        </div>
      </div>
    </div>
  );
}
