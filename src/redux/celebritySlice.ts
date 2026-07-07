import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CelebritiesInterface } from "@app-types/CelebrityState";
import { CelebrityWorkInterface } from "@app-types/Celebrity";

const initialState: CelebritiesInterface = {
  treandingCelebrities: {
    list: [],
    loading: true,
    // error: false,
    // errorResponse: {},
  },
  populerCelebrities: {
    list: [],
    loading: true,
    // error: false,
    // errorResponse: {},
  },
  celebrityDetail: {
    details: null,
    loading: true,
    // error: false,
    // errorResponse: {},
  },
  works: {
    id: 0,
    cast: [],
    crew: [],
    loading: true
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
    setCelebrityDetailData: (
      state,
      action: PayloadAction<CelebritiesInterface>,
    ) => {
      return {
        ...state,
        celebrityDetail: action.payload.celebrityDetail,
      };
    },
    setCelebrityWorkData: (
      state,
      action: PayloadAction<CelebrityWorkInterface>,
    ) => {
      return {
        ...state,
        works: { ...action.payload },
      };
    },
    startLoading: (state, action: PayloadAction<boolean>) => {
      return { ...state, loading: action.payload };
    },
  },
});

export const {
  setTreandingCelebritiesData,
  setPopulerCelebritiesData,
  setCelebrityDetailData,
  setCelebrityWorkData,
  startLoading
} = celebritySlice.actions;
export default celebritySlice.reducer;
