import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieResult } from "@app-types/TopUpComingMovies";
import { MoviesInterface } from "@app-types/MovieState";

const initialState: MoviesInterface = {
  treandingThisWeek: {
    list: [],
    // loading: false,
    // error: false,
    // errorResponse: {},
  },
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setTreandingThisWeekData: (state, action: PayloadAction<MoviesInterface>) => {            
      return { ...state, treandingThisWeek: action.payload.treandingThisWeek };
    },
    // startLoading: (state, action: PayloadAction<boolean>) => {
    //   return { ...state, loading: action.payload };
    // },
  },
});

export const { setTreandingThisWeekData } = movieSlice.actions;
export default movieSlice.reducer;
