import { MovieDetails } from "@app-types/MovieDetails";
import styles from "./Header.module.css";
import { formatBirthday, formatRuntime } from "@Helper/function";
import { TvShowDetailsResponse } from "@app-types/TvSeries";
import { CelebrityDetailResponse } from "@app-types/Celebrity";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
interface MovieHeaderProps {
  id: number;
  type: "movie";
  data: MovieDetails;
  loading: boolean;
}

interface TvHeaderProps {
  id: number;
  type: "tvShow";
  data: TvShowDetailsResponse;
  loading: boolean;
}

interface CelebrityProps {
  id: number;
  type: "celebrity";
  data: CelebrityDetailResponse | null;
  loading: boolean;
}

type HeaderComponentProps = MovieHeaderProps | TvHeaderProps | CelebrityProps;

export default function HeaderComponent({
  id,
  type,
  data,
  loading,
}: Readonly<HeaderComponentProps>) {
  const year =
    type === "movie"
      ? (data.release_date?.split("-")[0] ?? "N/A")
      : type === "tvShow"
        ? (data.first_air_date?.split("-")[0] ?? "N/A")
        : (formatBirthday((data !== null && data !== undefined) ? data.birthday : "") ?? "N/A");

  const airData =
    type === "movie"
      ? formatRuntime(data.runtime)
      : type === "tvShow"
        ? (data?.last_air_date?.split("-")[0] ?? "N/A")
        : (data !== null && data !== undefined) ? data.known_for_department : "";

  //LOAD SKELETON
  if (loading) {
    return (
      <div className={styles.header}>
        <div className={`container top ${styles.head}`}>
          <div>
            <Skeleton width={250} height={30} />

            <div
              style={{
                gap: 12,
                marginTop: 6,
              }}
            >
              <Skeleton width={90} height={18} />
            </div>
          </div>

          <div className={styles.rating_area_skeleton}>
            <Skeleton circle width={32} height={32} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.header}>
        <div className={`container top ${styles.head}`}>
          {loading ? (
            <></>
          ) : (
            <div>
              <div className={styles.movie_title}>
                {type == "movie" ? data.title : (data !== null && data !== undefined) ? data.name : ""}
              </div>
              <div className={styles.year_time}>
                <div className={styles.year}>{year}</div>

                <div className={styles.dot}></div>
                <div className={styles.year}>{airData}</div>
              </div>
            </div>
          )}

          <div className={styles.rating_area}>
            {type !== "celebrity" && (
              <div className={styles.star}>
                <img src={"/star.svg"} />
              </div>
            )}
            <div className={styles.rating}>
              {type === "celebrity"
                ? ""
                : data.vote_average
                  ? data.vote_average.toFixed(1)
                  : "0"}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
