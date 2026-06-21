import { setPopulerCelebritiesData, setTreandingCelebritiesData } from "@redux/celebritySlice";
import { setTreandingThisWeekData } from "@redux/moviesSlice";

import { Dispatch } from "@reduxjs/toolkit";
import { getPopulerCelebrities, getTrendingCelebrities } from "@Api/Celebrity";

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

export { fetchTrendingCelebrities, fetchPopulerCelebrities };
