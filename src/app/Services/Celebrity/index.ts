import {
  setCelebrityDetailData,
  setCelebrityWorkData,
  setPopulerCelebritiesData,
  setTreandingCelebritiesData,
} from "@redux/celebritySlice";
import { Dispatch } from "@reduxjs/toolkit";
import {
  getCelebrityDetail,
  getCelebrityMovies,
  getCelebrityPhotos,
  getPopulerCelebrities,
  getTrendingCelebrities,
} from "@Api/Celebrity";
import { setPhotoData } from "@/src/redux/photoSlice";
import { PhotoResponse } from "@app-types/Photos";
import { CelebrityWorkInterface, CelebrityWorks } from "../../types/Celebrity";

const fetchCelebrityDetails = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      // dispatch(startLoading(true));

      const celebrityDetails = await getCelebrityDetail(id);
      const celebrityDetailsData = celebrityDetails.data;
      dispatch(
        setCelebrityDetailData({
          celebrityDetail: { details: celebrityDetailsData },
        }),
      );

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

const fetchTrendingCelebrities = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(
        setTreandingCelebritiesData({
          treandingCelebrities: { list: [], loading: true },
        }),
      );

      const trendingCelebrityResponse = await getTrendingCelebrities();
      const trendingCelebrityData = trendingCelebrityResponse.data.results;
      dispatch(
        setTreandingCelebritiesData({
          treandingCelebrities: { list: trendingCelebrityData, loading: false },
        }),
      );
    } catch (error: unknown) {
      console.log(error);
      dispatch(
        setTreandingCelebritiesData({
          treandingCelebrities: { list: [], loading: false },
        }),
      );
      // dispatch(startLoading(false));
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};
const fetchPopulerCelebrities = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(
        setPopulerCelebritiesData({
          populerCelebrities: { list: [], loading: true },
        }),
      );

      const populerCelebrities = await getPopulerCelebrities();
      const populerCelebritiesData = populerCelebrities.data.results;
      dispatch(
        setPopulerCelebritiesData({
          populerCelebrities: { list: populerCelebritiesData, loading: false },
        }),
      );
    } catch (error: unknown) {
      console.log(error);
      dispatch(
        setPopulerCelebritiesData({
          populerCelebrities: { list: [], loading: false },
        }),
      );
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

const fetchCelebrityPhotos = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      // dispatch(startLoading(true));

      const celebritityPhotos = await getCelebrityPhotos(id);
      const CelebrityPhotossData = celebritityPhotos.data;

      const data: PhotoResponse = {
        id: CelebrityPhotossData.id,
        profiles: CelebrityPhotossData.profiles,
        backdrops: [],
        logos: [],
        posters: [],
      };

      dispatch(setPhotoData(data));

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

const fetchCelebrityWorks = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      // dispatch(startLoading(true));

      const celebritityWorks = await getCelebrityMovies(id);
      const CelebrityWorksData = celebritityWorks.data;

      const data: CelebrityWorkInterface = {
        id: CelebrityWorksData.id,

        cast: (CelebrityWorksData.cast || []).map((item) => ({
          adult: item.adult ?? false,
          backdrop_path: item.backdrop_path ?? "",
          character: item.character ?? "",
          id: item.id,
          media_type: item.media_type,

          original_title:
            item.media_type === "movie"
              ? (item.original_title ?? "")
              : (item.original_name ?? ""),
          title:
            item.media_type === "movie"
              ? (item.title ?? "")
              : (item.name ?? ""),

          overview: item.overview ?? "",
          poster_path: item.poster_path ?? "",
          vote_average: item.vote_average ?? 0,
        })),

        crew: (CelebrityWorksData.crew || []).map((item) => ({
          adult: item.adult ?? false,
          backdrop_path: item.backdrop_path ?? "",
          character: item.character ?? "",
          id: item.id,
          media_type: item.media_type ?? "movie",
          original_title:
            item.media_type === "movie"
              ? (item.original_title ?? "")
              : (item.original_name ?? ""),
          title:
            item.media_type === "movie"
              ? (item.title ?? "")
              : (item.name ?? ""),
          overview: item.overview ?? "",
          poster_path: item.poster_path ?? "",
          vote_average: item.vote_average ?? 0,
        })),
      };

      dispatch(setCelebrityWorkData(data));

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
  fetchTrendingCelebrities,
  fetchPopulerCelebrities,
  fetchCelebrityDetails,
  fetchCelebrityPhotos,
  fetchCelebrityWorks,
};
