import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliderState } from "@app-types/SliderState";

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
    startLoading: (state, action: PayloadAction<boolean>) => {
      return { ...state, loading: action.payload };
    },
  },
});

export const { startLoading } = sliderSlice.actions;
export default sliderSlice.reducer;
