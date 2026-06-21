"use client";

import styles from "./page.module.css";

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
} from "@Services/Home";
import { fetchTrendingCelebrities } from "@Services/Celebrity";

export default function Page() {
  const dispatch = useDispatch<AppDispatch>();

  const sliderMovies = useSelector((state: RootState) => state.slider.list);
  const trendingThisWeekMovies = useSelector(
    (state: RootState) => state.movie.treandingThisWeek?.list || [],
  );
  const nowPlayingMovies = useSelector(
    (state: RootState) => state.movie.nowPlaying?.list || [],
  );
  const populerMovies = useSelector(
    (state: RootState) => state.movie.populerMovies?.list || [],
  );
  const populerTvShows = useSelector(
    (state: RootState) => state.movie.populerTvShows?.list || [],
  );
  const topRatedTvShows = useSelector(
    (state: RootState) => state.movie.topRatedTvShows?.list || [],
  );
  const trendingCelebrities = useSelector(
    (state: RootState) => state.celebrity.treandingCelebrities?.list || [],
  );

  const getInitData = async (): Promise<void> => {
    dispatch(fetchSliderMovies());
    dispatch(fetchTrendingThisWeekMovies());
    dispatch(fetchNowPlaying());
    dispatch(fetchPopulerMovies());
    dispatch(fetchPopulerTvShows());
    dispatch(fetchTopRatedTvShows());
    dispatch(fetchTrendingCelebrities());
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getInitData();
  }, []);

  return (
    <div>
      <MenuComponent />
      <SliderComponent movies={sliderMovies} />

      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Trending This Week</div>
        <SwiperComponent
          data={trendingThisWeekMovies}
          slidesPerView={5}
          spaceBetween={15}
        />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Now Playing</div>
        <SwiperComponent
          data={nowPlayingMovies}
          slidesPerView={5}
          spaceBetween={15}
        />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Popular Movies</div>
        <SwiperComponent
          data={populerMovies}
          slidesPerView={5}
          spaceBetween={15}
        />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Trending Celebrities</div>
        <CelebrityComponent
          data={trendingCelebrities}
          slidesPerView={6}
          spaceBetween={15}
        />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Popular TV Shows</div>
        <SwiperComponent
          data={populerTvShows}
          slidesPerView={5}
          spaceBetween={15}
        />
      </div>
      {/* <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Upcoming Movies</div>
        <SwiperComponent slidesPerView={5} spaceBetween={15} />
      </div> */}
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Top Rated TV Shows</div>
        <SwiperComponent
          data={topRatedTvShows}
          slidesPerView={5}
          spaceBetween={15}
        />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Popular Celebrities</div>
        <CelebrityComponent slidesPerView={5} spaceBetween={15} />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Viewed</div>
        <SwiperComponent
          shoeDetail={false}
          slidesPerView={6}
          spaceBetween={15}
        />
      </div>
    </div>
  );
}
