import { CrewMember, CrewRole, MovieDetails } from "@app-types/MovieDetails";
import styles from "./Media.module.css";
import { TMDB_IMAGE_BASE } from "@Constant/ApiDataHelper";
import { useEffect, useState } from "react";

import { CelebrityDetailResponse } from "@app-types/Celebrity";
import {
  calculateAge,
  formatBirthday,
  getGender,
  truncateDetails,
} from "@Helper/function";
import Link from "next/link";

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
              <div className={styles.right_side_detail}>
                {formatBirthday(data.birthday)}
              </div>
            </div>
            <div className={styles.right_side_content}>
              <div className={styles.point}>Age</div>
              <div className={styles.right_side_detail}>
                {calculateAge(data.birthday)}
              </div>
            </div>
            <div className={styles.right_side_content}>
              <div className={styles.point}>Gender</div>
              <div className={styles.right_side_detail}>
                {getGender(data.gender)}
              </div>
            </div>
            <div className={styles.right_side_content}>
              <div className={styles.point}>Birthplace</div>
              <div className={styles.right_side_detail}>
                {/* {console.log(data.place_of_birth)} */}
                {data.place_of_birth ?? "N/A"}
              </div>
            </div>
            <div className={styles.right_side_content}>
              <div className={styles.point}>Also Known As</div>
              <div className={styles.right_side_detail}>
                {data.also_known_as && data.also_known_as.length > 0
                  ? data.also_known_as.join(", ")
                  : "None"}
              </div>
            </div>
            <div className={styles.right_side_content}>
              <div className={styles.point}>IMDB</div>
              <div className={styles.right_side_detail}>
                <Link
                  href={`https://www.imdb.com/name/${data.imdb_id}`}
                  target="_blank"
                  className={styles.link}
                >
                  View on IMDB
                </Link>
              </div>
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
