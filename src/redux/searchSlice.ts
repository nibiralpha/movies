import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchPersonResult, TmdbSearchResponse } from "@app-types/Search";
interface SearchState {
  data: {
    page: number;
    results: SearchPersonResult[];
    total_pages: number;
    total_results: number;
  };
  loading: boolean;
}

const initialState: SearchState = {
  data: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  loading: false,
};

export const searchSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setSearchData: (state, action: PayloadAction<TmdbSearchResponse>) => {
      return { ...state, data: action.payload };
    },
    searchLoading: (state, action: PayloadAction<boolean>) => {
      return { ...state, loading: action.payload };
    },
  },
});

export const { setSearchData, searchLoading } = searchSlice.actions;
export default searchSlice.reducer;
