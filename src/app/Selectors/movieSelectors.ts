import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";

export const movieSelectors = createSelector(
  [
    (state: RootState) => state.slider,
    (state: RootState) => state.movie,
    (state: RootState) => state.celebrity,
  ],
  (slider, movie, celebrity) => ({
    sliderMovies: slider?.list || [],
    isLoadingSlider: slider?.loading ?? false,

    trendingThisWeekMovies: movie.treandingThisWeek?.list || [],
    isLoadingTrendingMovies: movie.treandingThisWeek?.loading ?? false,

    nowPlayingMovies: movie.nowPlaying?.list || [],
    isLoadingNowPlaying: movie.nowPlaying?.loading ?? false,

    populerMovies: movie.populerMovies?.list || [],
    isLoadingPopularMovies: movie.populerMovies?.loading ?? false,

    populerTvShows: movie.populerTvShows?.list || [],
    isLoadingPopularTvShows: movie.populerTvShows?.loading ?? false,

    topRatedTvShows: movie.topRatedTvShows?.list || [],
    isLoadingTopRatedTvShows: movie.topRatedTvShows?.loading ?? false,

    trendingCelebrities: celebrity.treandingCelebrities?.list || [],
    isLoadingTrendingCelebrities:
      celebrity.treandingCelebrities?.loading ?? false,

    populerCelebrities: celebrity.populerCelebrities?.list || [],
    isLoadingPopularCelebrities: celebrity.populerCelebrities?.loading ?? false,
  }),
);
