import { setTVSeriesData, startLoading } from "@redux/tvShowDetailSlice";
import {
  setPopulerTvShowsData,
  setTopRatedTvShowsData,
} from "@redux/moviesSlice";

import {
  getPopulerTvShows,
  getTopRatedTvShows,
  getTvSeriesDetails,
  getTvShowsPhotos,
  getTvShowsVideos,
} from "@/src/app/Api/TVShows";

import { Dispatch } from "@reduxjs/toolkit";
import { setVideoData, setVideoLoading } from "@/src/redux/videosSlice";
import { setPhotoData, setPhotoLoading } from "@/src/redux/photoSlice";

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

const fetchTvSeriesDetails = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(startLoading(true));

      const tvShowsResponse = await getTvSeriesDetails(id);
      const tvShowsData = tvShowsResponse.data;
      dispatch(setTVSeriesData(tvShowsData));

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

const fetchTvSeriesVideos = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setVideoLoading(true));

      const tvShowsVideoResponse = await getTvShowsVideos(id);
      const tvShowsVideoData = tvShowsVideoResponse.data;
      dispatch(setVideoData(tvShowsVideoData));

      dispatch(setVideoLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(setVideoLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

const fetchTvSeriesPhotos = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setPhotoLoading(true));

      const tvShowsPhotoResponse = await getTvShowsPhotos(id);
      const tvShowsPhotoData = tvShowsPhotoResponse.data;
      dispatch(setPhotoData(tvShowsPhotoData));

      dispatch(setPhotoLoading(false));
    } catch (error: unknown) {
      console.log(error);
      dispatch(setPhotoLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

export {
  fetchPopulerTvShows,
  fetchTopRatedTvShows,
  fetchTvSeriesDetails,
  fetchTvSeriesVideos,
  fetchTvSeriesPhotos,
};
