import { CrewMember, CrewRole, MovieDetails } from "@app-types/MovieDetails";
import styles from "./Media.module.css";
import { TMDB_IMAGE_BASE } from "@Constant/ApiDataHelper";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
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
  loading: boolean;
}

type HeaderComponentProps = CelebrityHeaderProps;
export default function CelebrityMediaComponent({
  id,
  data,
  loading,
}: Readonly<HeaderComponentProps>) {
  return (
    <div className="container">
      <div className={styles.media}>
        <div className={styles.left_img}>
          {loading ? (
            <Skeleton
              height={450}
              width={300}
              borderRadius={8}
              containerClassName="block"
            />
          ) : (
            <img
              className={styles.img}
              src={`${TMDB_IMAGE_BASE}/${data.profile_path}`}
              alt=""
            />
          )}
        </div>
        <div className={styles.right_content}>
          <div className={styles.right_area}>
            {loading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className={styles.right_side_content}>
                  <div className={styles.point}>
                    <Skeleton width={80} height={16} />
                  </div>
                  <div className={styles.right_side_detail}>
                    <Skeleton width={140} height={16} />
                  </div>
                </div>
              ))
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
      <div className={styles.detail_area}>
        <div className={styles.details}>
          {loading ? (
            <Skeleton count={4} height={14} style={{ marginBottom: "6px" }} />
          ) : (
            truncateDetails(data.biography, 300)
          )}
        </div>
      </div>
    </div>
  );
}
