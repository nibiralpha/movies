import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PhotoResponse } from "@app-types/Photos";
import { SearchPersonResult, TmdbSearchResponse } from "@app-types/Search";

// interface PhotoState {
//   data: PhotoResponse;
//   loading: boolean;
// }

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
  //   data: {
  //     id: 0,
  //     backdrops: [],
  //     logos: [],
  //     posters: [],
  //     profiles: [],
  //   },
  //   loading: false,
};

// const initialState: PhotoState = {
//   data: {
//     id: 0,
//     backdrops: [],
//     logos: [],
//     posters: [],
//     profiles: [],
//   },
//   loading: false,
// };

export const searchSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setSearchData: (state, action: PayloadAction<TmdbSearchResponse>) => {
      return { ...state, data: action.payload };
    },
    setSearchLoading: (state, action: PayloadAction<boolean>) => {
      return { ...state, loading: action.payload };
    },
  },
});

export const { setSearchData, setSearchLoading } = searchSlice.actions;
export default searchSlice.reducer;
