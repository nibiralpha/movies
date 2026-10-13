import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/src/redux/store";

export const selectTvShowDetailPageData = createSelector(
  [
    (state: RootState) => state.tvShowDetail,
    (state: RootState) => state.videos,
    (state: RootState) => state.photos,
  ],
  (tvShowDetailState, videosState, photosState) => ({
    tvShowDetail: tvShowDetailState.data || {},
    tvShowDetailLoading: tvShowDetailState.loading ?? false,

    casts: tvShowDetailState.data?.credits?.cast || [],

    videos: videosState.data || {},
    videosLoading: videosState.loading ?? false,

    photos: photosState.data || {},
    photosLoading: photosState.loading ?? false,
  }),
);
