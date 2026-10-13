import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/src/redux/store";

export const selectMovieDetailPageData = createSelector(
  [
    (state: RootState) => state.movieDetail,
    (state: RootState) => state.videos,
    (state: RootState) => state.photos,
  ],
  (movieDetailState, videosState, photosState) => ({
    movieDetail: movieDetailState.data || {},
    movieDetailLoading: movieDetailState.loading ?? false,

    casts: movieDetailState.data?.credits?.cast || [],

    videos: videosState.data || {},
    videosLoading: videosState.loading ?? false,

    photos: photosState.data || {},
    photosLoading: photosState.loading ?? false,
  }),
);
