import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliderSlice from "./sliderSlice";
import movieSlice from "./moviesSlice";
import celebritySlice from "./celebritySlice";
import movieDetailSlice from "./movieDetailSlice";

const rootReducer = combineReducers({
  slider: sliderSlice,
  movie: movieSlice,
  celebrity: celebritySlice,
  movieDetail: movieDetailSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
