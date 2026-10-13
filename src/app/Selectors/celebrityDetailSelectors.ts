import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";

export const CelebrityDetailSelectors = createSelector(
  [
    (state: RootState) => state.celebrity.celebrityDetail,
    (state: RootState) => state.photos,
    (state: RootState) => state.celebrity.works,
  ],
  (celebrityDetailState, photosState, worksState) => ({
    celebrityDetail: celebrityDetailState?.details,
    celebLoading: celebrityDetailState?.loading ?? true,

    photos: photosState.data || {},
    photoLoading: photosState.loading,

    celebrityWorks: worksState || {
      id: 0,
      crew: [],
      cast: [],
    },
    celebrityWorksLoading: worksState?.loading ?? false,
  }),
);
