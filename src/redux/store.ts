import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliderSlice from "./sliderSlice";
import movieSlice from "./moviesSlice";
import celebritySlice from "./celebritySlice";
import movieDetailSlice from "./movieDetailSlice";
import videosSlice from "./videosSlice";
import photoSlice from "./photoSlice";
import tvShowDetailSlice from "./tvShowDetailSlice";
import searchSlice from "./searchSlice";

const rootReducer = combineReducers({
  slider: sliderSlice,
  movie: movieSlice,
  celebrity: celebritySlice,
  movieDetail: movieDetailSlice,
  tvShowDetail: tvShowDetailSlice,
  videos: videosSlice,
  photos: photoSlice,
  search: searchSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
