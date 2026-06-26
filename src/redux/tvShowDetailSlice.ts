import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TvShowDetailsResponse } from "@app-types/TvSeries";

interface TVShowDetailState {
  data: TvShowDetailsResponse;
  loading: boolean;
}

const initialState: TVShowDetailState = {
  data: {
    adult: false,
    backdrop_path: null,
    created_by: [],
    episode_run_time: [],
    first_air_date: "",
    genres: [],
    homepage: "",
    id: 0,
    in_production: false,
    languages: [],
    last_air_date: "",
    last_episode_to_air: null,
    name: "", 
    next_episode_to_air: null,
    networks: [],
    number_of_episodes: 0,
    number_of_seasons: 0,
    origin_country: [],
    original_language: "",
    original_name: "",
    overview: "",
    popularity: 0,
    poster_path: null,
    production_companies: [],
    production_countries: [],
    seasons: [],
    spoken_languages: [],
    status: "",
    tagline: "",
    type: "",
    vote_average: 0,
    vote_count: 0,
    credits: {
      crew: [],
      cast: [],
    },
  },
  loading: true,
};

export const tvShowDetailSlice = createSlice({
  name: "tvShowDetail",
  initialState,
  reducers: {
    setTVSeriesData: (state, action: PayloadAction<TvShowDetailsResponse>) => {
      return { ...state, data: action.payload };
    },
    startLoading: (state, action: PayloadAction<boolean>) => {
      return { ...state, loading: action.payload };
    },
  },
});

export const { setTVSeriesData, startLoading } = tvShowDetailSlice.actions;
export default tvShowDetailSlice.reducer;
