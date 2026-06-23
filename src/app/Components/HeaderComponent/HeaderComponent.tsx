// import { useDispatch, useSelector } from "react-redux";
import { MovieDetails } from "@app-types/MovieDetails";
import styles from "./Header.module.css";
import { formatRuntime } from "../../Helper/function";
// import { AppDispatch, RootState } from "@/src/redux/store";
// import { useEffect } from "react";
// import { fetchMovieDetails } from "@Services/Movies";
interface HeaderComponentProps {
  id: number;
  data: MovieDetails;
}
export default function HeaderComponent({
  id,
  data,
}: Readonly<HeaderComponentProps>) {
  return (
    <>
      <div className={styles.header}>
        <div className={`container top ${styles.head}`}>
          <div>
            <div className={styles.movie_title}>{data.original_title}</div>
            <div className={styles.year_time}>
              <div className={styles.year}>
                {data.release_date.split("-")[0]}
              </div>
              <div className={styles.dot}></div>
              <div className={styles.year}>{formatRuntime(data.runtime)}</div>
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
