import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.css";
import { AppDispatch, RootState } from "@/src/redux/store";
import { useEffect } from "react";
import { fetchMovieDetails } from "@Services/Movies";
interface HeaderComponentProps {
  id: number;
}
export default function HeaderComponent({ id }: Readonly<HeaderComponentProps>) {
  const dispatch = useDispatch<AppDispatch>();

  // const movieDetail = useSelector(
  //   (state: RootState) => state.movie.treandingThisWeek?.list || [],
  // );

  const getInitData = async (): Promise<void> => {
    dispatch(fetchMovieDetails(id));
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getInitData();
  }, []);

  return (
    <>
      <div className={styles.header}>
        <div className={`container top ${styles.head}`}>
          <div>
            <div className={styles.movie_title}>Sinners</div>
            <div className={styles.year_time}>
              <div className={styles.year}>2025</div>
              <div className={styles.dot}></div>
              <div className={styles.year}>2h 17m</div>
            </div>
          </div>
          <div className={styles.rating_area}>
            <div className={styles.star}>
              <img src={"/star.svg"} />
            </div>
            <div className={styles.rating}>7.5 / 10</div>
          </div>
        </div>
      </div>
    </>
  );
}
