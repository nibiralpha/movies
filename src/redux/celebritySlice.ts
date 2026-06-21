import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CelebritiesInterface } from "@app-types/CelebrityState";

const initialState: CelebritiesInterface = {
  treandingCelebrities: {
    list: [],
    // loading: false,
    // error: false,
    // errorResponse: {},
  },
  populerCelebrities: {
    list: [],
    // loading: false,
    // error: false,
    // errorResponse: {},
  },
};

export const celebritySlice = createSlice({
  name: "celebrities",
  initialState,
  reducers: {
    setTreandingCelebritiesData: (
      state,
      action: PayloadAction<CelebritiesInterface>,
    ) => {
      return {
        ...state,
        treandingCelebrities: action.payload.treandingCelebrities,
      };
    },
    setPopulerCelebritiesData: (
      state,
      action: PayloadAction<CelebritiesInterface>,
    ) => {
      return {
        ...state,
        populerCelebrities: action.payload.populerCelebrities,
      };
    },
    // startLoading: (state, action: PayloadAction<boolean>) => {
    //   return { ...state, loading: action.payload };
    // },
  },
});

export const { setTreandingCelebritiesData, setPopulerCelebritiesData } =
  celebritySlice.actions;
export default celebritySlice.reducer;
