// import { useDispatch, useSelector } from "react-redux";
import { MovieDetails } from "@app-types/MovieDetails";
import styles from "./Header.module.css";
import { formatBirthday, formatRuntime } from "@Helper/function";
import { TvShowDetailsResponse } from "@app-types/TvSeries";
import { CelebrityDetailResponse } from "../../types/Celebrity";
// import { AppDispatch, RootState } from "@/src/redux/store";
// import { useEffect } from "react";
// import { fetchMovieDetails } from "@Services/Movies";
interface MovieHeaderProps {
  id: number;
  type: "movie";
  data: MovieDetails;
}

interface TvHeaderProps {
  id: number;
  type: "tvShow";
  data: TvShowDetailsResponse;
}

interface CelebrityProps {
  id: number;
  type: "celebrity";
  data: CelebrityDetailResponse;
}

type HeaderComponentProps = MovieHeaderProps | TvHeaderProps | CelebrityProps;

export default function HeaderComponent({
  id,
  type,
  data,
}: Readonly<HeaderComponentProps>) {
  const year =
    type === "movie"
      ? (data.release_date?.split("-")[0] ?? "N/A")
      : type === "tvShow"
        ? (data.first_air_date?.split("-")[0] ?? "N/A")
        : (formatBirthday(data.birthday) ?? "N/A");

  const airData =
    type === "movie"
      ? formatRuntime(data.runtime)
      : type === "tvShow"
        ? (data?.last_air_date?.split("-")[0] ?? "N/A")
        : data.known_for_department;

  return (
    <>
      <div className={styles.header}>
        <div className={`container top ${styles.head}`}>
          <div>
            <div className={styles.movie_title}>
              {type == "movie" ? data.title : data.name}
            </div>
            <div className={styles.year_time}>
              <div className={styles.year}>{year}</div>
              {/* <div className={styles.year}>{type === "movie"
                  ? (data?.release_date?.split("-")[0] ?? "N/A")
                  : (data?.first_air_date?.split("-")[0] ?? "N/A")}</div>
              <div className={styles.dot}></div> */}
              <div className={styles.dot}></div>
              <div className={styles.year}>
                {/* {type == "movie"
                  ? formatRuntime(data.runtime)
                  : (data?.last_air_date?.split("-")[0] ?? "N/A")} */}
                {airData}
              </div>
            </div>
          </div>
          <div className={styles.rating_area}>
            <div className={styles.star}>
              <img src={"/star.svg"} />
            </div>
            <div className={styles.rating}>
              {/* {data.vote_average
                ? data.vote_average.toString().slice(0, 3)
                : "0"}{" "}
              / 10 */}
              {/* {type !== "celebrity" && (
                <div className={styles.rating}>
                  {data.vote_average ? data.vote_average.toFixed(1) : "0"} / 10
                </div>
              )} */}
              {type === "celebrity"
                ? data.popularity
                  ? data.popularity.toFixed(1)
                  : "0"
                : data.vote_average
                  ? data.vote_average.toFixed(1)
                  : "0"}{" "}
              {/* {type === "celebrity" ? "Popularity" : "/ 10"} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
