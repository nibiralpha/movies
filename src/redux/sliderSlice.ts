import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliderState } from "@app-types/SliderState";
import { MovieResult } from "../app/types/TopUpComingMovies";

const initialState: SliderState = {
  list: [],
  loading: false,
  error: false,
  errorResponse: {},
};

export const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    setSliderData: (state, action: PayloadAction<MovieResult[]>) => {
      return { ...state, list: action.payload };
    },
    startLoading: (state, action: PayloadAction<boolean>) => {
      return { ...state, loading: action.payload };
    },
  },
});

export const { startLoading, setSliderData } = sliderSlice.actions;
export default sliderSlice.reducer;
