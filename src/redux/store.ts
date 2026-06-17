import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliderSlice from "./sliderSlice";

const rootReducer = combineReducers({
  slider: sliderSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
