import { setSliderData, startLoading } from "@redux/sliderSlice";
import {
  setNowPlayingData,
  setPopulerMoviesData,
  setPopulerTvShowsData,
  setTopRatedTvShowsData,
  setTreandingThisWeekData,
} from "@redux/moviesSlice";

import {
  getMovieDetails,
  getNowPlaying,
  getPopulerMovies,
  getPopulerTvShows,
  getTopRatedTvShows,
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
        setNowPlayingData({
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

const fetchMovieDetails = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      // dispatch(startLoading(true));

      const movieDetailsResponse = await getMovieDetails(id);
      const movieData = movieDetailsResponse.data;
      console.log(movieData);
      
      // dispatch(
      //   setTopRatedTvShowsData({
      //     topRatedTvShows: { list: topRatedTvShowsData },
      //   }),
      // );

      // dispatch(startLoading(false));
    } catch (error: unknown) {
      console.log(error);
      // dispatch(startLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

export {
  fetchSliderMovies,
  fetchTrendingThisWeekMovies,
  fetchNowPlaying,
  fetchPopulerMovies,
  fetchPopulerTvShows,
  fetchTopRatedTvShows,
  fetchMovieDetails
};
