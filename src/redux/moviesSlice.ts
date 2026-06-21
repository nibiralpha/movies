import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesInterface } from "@app-types/MovieState";

const initialState: MoviesInterface = {
  treandingThisWeek: {
    list: [],
    // loading: false,
    // error: false,
    // errorResponse: {},
  },
  nowPlaying: {
    list: [],
    // loading: false,
    // error: false,
    // errorResponse: {},
  },
  populerMovies: {
    list: [],
    // loading: false,
    // error: false,
    // errorResponse: {},
  },
  populerTvShows: {
    list: [],
    // loading: false,
    // error: false,
    // errorResponse: {},
  },
  topRatedTvShows: {
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
    setTreandingThisWeekData: (
      state,
      action: PayloadAction<MoviesInterface>,
    ) => {
      return { ...state, treandingThisWeek: action.payload.treandingThisWeek };
    },
    setNowPlayingData: (state, action: PayloadAction<MoviesInterface>) => {
      return { ...state, nowPlaying: action.payload.nowPlaying };
    },
    setPopulerMoviesData: (state, action: PayloadAction<MoviesInterface>) => {
      return { ...state, populerMovies: action.payload.populerMovies };
    },
    setPopulerTvShowsData: (state, action: PayloadAction<MoviesInterface>) => {
      return { ...state, populerTvShows: action.payload.populerTvShows };
    },
    setTopRatedTvShowsData: (state, action: PayloadAction<MoviesInterface>) => {
      return { ...state, topRatedTvShows: action.payload.topRatedTvShows };
    },
    // startLoading: (state, action: PayloadAction<boolean>) => {
    //   return { ...state, loading: action.payload };
    // },
  },
});

export const {
  setTreandingThisWeekData,
  setNowPlayingData,
  setPopulerMoviesData,
  setPopulerTvShowsData,
  setTopRatedTvShowsData
} = movieSlice.actions;
export default movieSlice.reducer;
