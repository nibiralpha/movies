import { setTreandingCelebritiesData } from "@redux/celebritySlice";
import { setTreandingThisWeekData } from "@redux/moviesSlice";

import { Dispatch } from "@reduxjs/toolkit";
import { getTrendingCelebrities } from "@Api/Celebrity";

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
// const fetchPopulerCelebrities = () => {
//   return async (dispatch: Dispatch) => {
//     try {
//       // dispatch(startLoading(true));

//       const movieResponse = await getTrendingThisWeek();
//       const treandingThisWeekData = movieResponse.data.results;
//       dispatch(
//         setTreandingThisWeekData({
//           treandingThisWeek: { list: treandingThisWeekData },
//         }),
//       );

//       // dispatch(startLoading(false));
//     } catch (error: unknown) {
//       console.log(error);
//       dispatch(startLoading(false));
//       // dispatch(getAllHeroesFailed(error))
//       // return Promise.reject(error?.response?.data);
//       throw error;
//     }
//   };
// };

export {
  fetchTrendingCelebrities,
  // fetchTrendingThisWeekMovies
};
