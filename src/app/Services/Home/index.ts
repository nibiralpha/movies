import { setSliderData, startLoading } from "@redux/sliderSlice";
import {
  setNowPlayingkData,
  setPopulerMoviesData,
  setTreandingThisWeekData,
} from "@redux/moviesSlice";

import {
  getNowPlaying,
  getPopulerMovies,
  getTopUpComingMovies,
  getTrendingThisWeek,
} from "@/src/app/Api/Movies";
import { Dispatch } from "@reduxjs/toolkit";

const fetchSliderMovies = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(startLoading(true));

      const slideResponse = await getTopUpComingMovies();
      const sliderData = slideResponse.data.results;
      dispatch(setSliderData(sliderData));

      dispatch(startLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(startLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};
const fetchTrendingThisWeekMovies = () => {
  return async (dispatch: Dispatch) => {
    try {
      // dispatch(startLoading(true));

      const movieResponse = await getTrendingThisWeek();
      const treandingThisWeekData = movieResponse.data.results;
      dispatch(
        setTreandingThisWeekData({
          treandingThisWeek: { list: treandingThisWeekData },
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

const fetchNowPlaying = () => {
  return async (dispatch: Dispatch) => {
    try {
      // dispatch(startLoading(true));

      const movieResponse = await getNowPlaying();
      const nowPlayingData = movieResponse.data.results;
      dispatch(
        setNowPlayingkData({
          nowPlaying: { list: nowPlayingData },
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

const fetchPopulerMovies = () => {
  return async (dispatch: Dispatch) => {
    try {
      // dispatch(startLoading(true));

      const movieResponse = await getPopulerMovies();
      const populerMoviesData = movieResponse.data.results;
      dispatch(
        setPopulerMoviesData({
          populerMovies: { list: populerMoviesData },
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

export { fetchSliderMovies, fetchTrendingThisWeekMovies, fetchNowPlaying, fetchPopulerMovies };
