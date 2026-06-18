import { startLoading } from "@redux/sliderSlice";
import { getTopUpComingMovies } from "@Api/Home";
import { Dispatch } from "@reduxjs/toolkit";

const fetchSliderMovies = () => {
  return async (dispatch: Dispatch) => {
    try {
      console.log("zzzzzzzzzzzz");
      
      dispatch(startLoading(true));
      const slideResponse = await getTopUpComingMovies();
      const sliderData = slideResponse.data;
      console.log(sliderData);

      //   dispatch(heroData(heroes));
      dispatch(startLoading(false));
    } catch (error: unknown) {
      console.log(error);
      // dispatch(stopHeroesLoading())
      // dispatch(getAllHeroesFailed(error))
      // return Promise.reject(error?.response?.data);
      throw error;
    }
  };
};

export { fetchSliderMovies };
