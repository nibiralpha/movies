import {
  setCelebrityDetailData,
  setPopulerCelebritiesData,
  setTreandingCelebritiesData,
} from "@redux/celebritySlice";
import { Dispatch } from "@reduxjs/toolkit";
import {
  getCelebrityDetail,
  getCelebrityPhotos,
  getPopulerCelebrities,
  getTrendingCelebrities,
} from "@Api/Celebrity";
import { setPhotoData } from "@/src/redux/photoSlice";
import { PhotoResponse } from "@app-types/Photos";

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
      // dispatch(startLoading(true));

      const trendingCelebrityResponse = await getTrendingCelebrities();
      const trendingCelebrityData = trendingCelebrityResponse.data.results;
      dispatch(
        setTreandingCelebritiesData({
          treandingCelebrities: { list: trendingCelebrityData },
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
const fetchPopulerCelebrities = () => {
  return async (dispatch: Dispatch) => {
    try {
      // dispatch(startLoading(true));

      const populerCelebrities = await getPopulerCelebrities();
      const populerCelebritiesData = populerCelebrities.data.results;
      dispatch(
        setPopulerCelebritiesData({
          populerCelebrities: { list: populerCelebritiesData },
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

const fetchCelebrityPhotos = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      // dispatch(startLoading(true));

      const celebritityPhotos = await getCelebrityPhotos(id);
      const CelebrityPhotossData = celebritityPhotos.data;

      const data: PhotoResponse = {
        id: CelebrityPhotossData.id,
        backdrops: [],
        logos: [],
        posters: [],
        profiles: CelebrityPhotossData.profiles,
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

export {
  fetchTrendingCelebrities,
  fetchPopulerCelebrities,
  fetchCelebrityDetails,
  fetchCelebrityPhotos,
};
