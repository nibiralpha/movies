// import { useDispatch, useSelector } from "react-redux";
import { MovieDetails } from "@app-types/MovieDetails";
import styles from "./Header.module.css";
import { formatRuntime } from "@Helper/function";
import { TvShowDetailsResponse } from "@app-types/TvSeries";
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

type HeaderComponentProps = MovieHeaderProps | TvHeaderProps;

export default function HeaderComponent({
  id,
  type,
  data,
}: Readonly<HeaderComponentProps>) {
  return (
    <>
      <div className={styles.header}>
        <div className={`container top ${styles.head}`}>
          <div>
            <div className={styles.movie_title}>
              {type == "movie" ? data.title : data.name}
            </div>
            <div className={styles.year_time}>
              <div className={styles.year}>
                {type === "movie"
                  ? (data?.release_date?.split("-")[0] ?? "N/A")
                  : (data?.first_air_date?.split("-")[0] ?? "N/A")}
              </div>
              <div className={styles.dot}></div>
              <div className={styles.year}>
                {type == "movie" ? formatRuntime(data.runtime) : data?.last_air_date?.split("-")[0] ?? "N/A"}
              </div>
            </div>
          </div>
          <div className={styles.rating_area}>
            <div className={styles.star}>
              <img src={"/star.svg"} />
            </div>
            <div className={styles.rating}>
              {data.vote_average
                ? data.vote_average.toString().slice(0, 3)
                : "0"}{" "}
              / 10
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
