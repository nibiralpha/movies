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
            width={"270px"}
            src={`${TMDB_IMAGE_BASE}/${data.profile_path}`}
          />
        </div>
      </div>
      <div className={styles.detail_area}>
        <div className={styles.details}>{truncateDetails(data.biography, 300)}</div>
      </div>
    </div>
  );
}
