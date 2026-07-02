"use client";

import styles from "./Top.module.css";

import MenuComponent from "@Components/MenuComponent/MenuComponent";
import SliderComponent from "@Components/SliderComponent/SliderComponent";
import SwiperComponent from "@Components/SwiperComponent/SwiperComponent";
import CelebrityComponent from "@Components/CelebrityComponent/CelebrityComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@redux/store";
import {
  fetchNowPlaying,
  fetchPopulerMovies,
  fetchPopulerTvShows,
  fetchSliderMovies,
  fetchTopRatedTvShows,
  fetchTrendingThisWeekMovies,
} from "@/src/app/Services/Movies";
import {
  fetchPopulerCelebrities,
  fetchTrendingCelebrities,
} from "@Services/Celebrity";

export default function Page() {
  const dispatch = useDispatch<AppDispatch>();

  const nowPlayingMovies = useSelector(
    (state: RootState) => state.movie.nowPlaying?.list || [],
  );

  const getInitData = async (): Promise<void> => {
    dispatch(fetchNowPlaying());
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getInitData();
  }, []);

  return (
    <div>
      <MenuComponent />
      <div className="container">
        <div className={styles.movie_section}>
          <h2 className={styles.top_movies_title}>Top 250 movies</h2>
          <div className={styles.table}>
            <div className="row">
              <div key={"11"} className="col-12 col-md-2">
                <div className={styles.top_movies}>
                  <div className={styles.movies_top_img}>
                    <img
                      className={styles.avater}
                      src={
                        `/sinner.jpg`
                        // cast.profile_path == null
                        // ? "/blank_celebrity.jpg"
                        // : `blank_celebrity.jpg`
                      }
                      alt={"1"}
                    />
                  </div>
                  <div className={styles.movie_content}>
                    <div className={styles.sl_number}>#1</div>
                    <div className={styles.movie_name}>The Godfather</div>
                    <div className={styles.detail}>1994 . 2h . 22m . R</div>
                  </div>
                </div>
                <div className={styles.top_movies}>
                  <div className={styles.movies_top_img}>
                    <img
                      className={styles.avater}
                      src={
                        `/blank_celebrity.jpg`
                        // cast.profile_path == null
                        // ? "/blank_celebrity.jpg"
                        // : `blank_celebrity.jpg`
                      }
                      alt={"1"}
                    />
                  </div>
                  <div className={styles.movie_content}>
                    <div className={styles.sl_number}>#1</div>
                    <div className={styles.movie_name}>The Godfather</div>
                    <div className={styles.detail}>1994 . 2h . 22m . R</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Viewed</div>
        You have no recently viewed pages
      </div>
    </div>
  );
}
