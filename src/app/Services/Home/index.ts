import { setSliderData, startLoading } from "@redux/sliderSlice";
import { getTopUpComingMovies } from "@Api/Home";
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

export { fetchSliderMovies };
