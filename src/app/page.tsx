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
  fetchSliderMovies,
  fetchTrendingThisWeekMovies,
} from "@/src/app/Services/Movies";
import {
  fetchPopulerCelebrities,
  fetchTrendingCelebrities,
} from "@Services/Celebrity";
import RecentViewComponent from "@Components/RecentView/RecentViewComponent";
import { fetchPopulerTvShows, fetchTopRatedTvShows } from "@Services/Series";

export default function Page() {
  const dispatch = useDispatch<AppDispatch>();

  const sliderMovies = useSelector((state: RootState) => state.slider.list);
  // const trendingThisWeekMovies = useSelector(
  //   (state: RootState) => state.movie.treandingThisWeek?.list || [],
  // );
  const { trendingThisWeekMovies, isLoadingTrendingMovies } = useSelector(
    (state: RootState) => ({
      trendingThisWeekMovies: state.movie.treandingThisWeek?.list || [],
      isLoadingTrendingMovies: state.movie.treandingThisWeek?.loading ?? false,
    }),
  );

  const { nowPlayingMovies, isLoadingNowPlaying } = useSelector(
    (state: RootState) => ({
      nowPlayingMovies: state.movie.nowPlaying?.list || [],
      isLoadingNowPlaying: state.movie.nowPlaying?.loading ?? false,
    }),
  );

  const { populerMovies, isLoadingPopularMovies } = useSelector(
    (state: RootState) => ({
      populerMovies: state.movie.populerMovies?.list || [],
      isLoadingPopularMovies: state.movie.populerMovies?.loading ?? false,
    }),
  );

  const { populerTvShows, isLoadingPopularTvShows } = useSelector(
    (state: RootState) => ({
      populerTvShows: state.movie.populerTvShows?.list || [],
      isLoadingPopularTvShows: state.movie.populerTvShows?.loading ?? false,
    }),
  );

  const { topRatedTvShows, isLoadingTopRatedTvShows } = useSelector(
    (state: RootState) => ({
      topRatedTvShows: state.movie.topRatedTvShows?.list || [],
      isLoadingTopRatedTvShows: state.movie.topRatedTvShows?.loading ?? false,
    }),
  );

  const trendingCelebrities = useSelector(
    (state: RootState) => state.celebrity.treandingCelebrities?.list || [],
  );
  const populerCelebrities = useSelector(
    (state: RootState) => state.celebrity.populerCelebrities?.list || [],
  );

  const getInitData = async (): Promise<void> => {
    dispatch(fetchSliderMovies());
    dispatch(fetchTrendingThisWeekMovies());
    dispatch(fetchNowPlaying());
    dispatch(fetchPopulerMovies());
    dispatch(fetchPopulerTvShows());
    dispatch(fetchTopRatedTvShows());
    dispatch(fetchTrendingCelebrities());
    dispatch(fetchPopulerCelebrities());
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
          type="movie"
          data={trendingThisWeekMovies}
          slidesPerView={5}
          spaceBetween={15}
          loading={isLoadingTrendingMovies}
        />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Now Playing</div>
        <SwiperComponent
          type="movie"
          data={nowPlayingMovies}
          slidesPerView={5}
          spaceBetween={15}
          loading={isLoadingNowPlaying}
        />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Popular Movies</div>
        <SwiperComponent
          type="movie"
          data={populerMovies}
          slidesPerView={5}
          spaceBetween={15}
          loading={isLoadingPopularMovies}
        />
      </div>
      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Popular Celebrities</div>
        <CelebrityComponent
          data={populerCelebrities}
          slidesPerView={6}
          spaceBetween={15}
        />
      </div>

      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Popular TV Shows</div>
        <SwiperComponent
          type="tvshow"
          data={populerTvShows}
          slidesPerView={5}
          spaceBetween={15}
          loading={isLoadingPopularTvShows}
        />
      </div>

      <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Top Rated TV Shows</div>
        <SwiperComponent
          type="tvshow"
          data={topRatedTvShows}
          slidesPerView={5}
          spaceBetween={15}
          loading={isLoadingTopRatedTvShows}
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
        <RecentViewComponent />
      </div>
      {/* <div className={`container ${styles.swiper}`}>
        <div className={styles.title}>Viewed</div>
        You have no recently viewed pages
         <SwiperComponent
          shoeDetail={false}
          slidesPerView={6}
          spaceBetween={15}
        /> 
      </div> */}
    </div>
  );
}
