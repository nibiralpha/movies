import { setSliderData, startLoading } from "@redux/sliderSlice";
import {
  setPopulerTvShowsData,
  setTopRatedTvShowsData
} from "@redux/moviesSlice";

import { getPopulerTvShows, getTopRatedTvShows, getTvSeriesDetails } from "@/src/app/Api/TVShows";

import { Dispatch } from "@reduxjs/toolkit";

const fetchPopulerTvShows = () => {
  return async (dispatch: Dispatch) => {
    try {
      // dispatch(startLoading(true));

      const tvShowsResponse = await getPopulerTvShows();
      const populerTvShowsData = tvShowsResponse.data.results;
      dispatch(
        setPopulerTvShowsData({
          populerTvShows: { list: populerTvShowsData },
        }),
      );

      // dispatch(startLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(startLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

const fetchTopRatedTvShows = () => {
  return async (dispatch: Dispatch) => {
    try {
      // dispatch(startLoading(true));

      const topRatedTvShowsResponse = await getTopRatedTvShows();
      const topRatedTvShowsData = topRatedTvShowsResponse.data.results;
      dispatch(
        setTopRatedTvShowsData({
          topRatedTvShows: { list: topRatedTvShowsData },
        }),
      );

      // dispatch(startLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(startLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

const fetchTvSeriesDetails = () => {
  return async (dispatch: Dispatch) => {
    try {
      // dispatch(startLoading(true));

      const tvShowsResponse = await getTopRatedTvShows();
      const tvShowsData = tvShowsResponse.data.results;
    //   dispatch(
    //     setTopRatedTvShowsData({
    //       topRatedTvShows: { list: tvShowsResponse },
    //     }),
    //   );

      // dispatch(startLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(startLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

export { fetchPopulerTvShows, fetchTopRatedTvShows, fetchTvSeriesDetails };
