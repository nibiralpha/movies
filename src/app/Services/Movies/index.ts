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
  getMoviePhotos,
  getMovieVideos,
  getNowPlaying,
  getPopulerMovies,
  getPopulerTvShows,
  getTopRatedTvShows,
  getTopUpComingMovies,
  getTrendingThisWeek,
} from "@/src/app/Api/Movies";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setMovieDetailsData,
  startDetailLoading,
} from "@/src/redux/movieDetailSlice";
import { setVideoData, setVideoLoading } from "@/src/redux/videosSlice";
import { setPhotoData, setPhotoLoading } from "@/src/redux/photoSlice";

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
      dispatch(startDetailLoading(true));

      const movieDetailsResponse = await getMovieDetails(id);
      const movieData = movieDetailsResponse.data;

      dispatch(setMovieDetailsData(movieData));

      dispatch(startDetailLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(startLoading(true));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

const fetchMovieVideos = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setVideoLoading(true));

      const movieVideoResponse = await getMovieVideos(id);
      const videoData = movieVideoResponse.data;

      dispatch(setVideoData(videoData));

      dispatch(setVideoLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(setVideoLoading(true));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

const fetchMoviePhotos = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setPhotoLoading(true));

      const moviePhotoResponse = await getMoviePhotos(id);
      const photoData = moviePhotoResponse.data;

      dispatch(setPhotoData(photoData));
      dispatch(setPhotoLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(setPhotoLoading(true));
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
  fetchMovieDetails,
  fetchMovieVideos,
  fetchMoviePhotos,
};
