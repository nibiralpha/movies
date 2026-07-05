import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieDetails, CastMember, CrewMember } from "@app-types/MovieDetails";

interface MovieDetailState {
  data: MovieDetails;
  loading: boolean;
}

const initialState: MovieDetailState = {
  data: {
    adult: false,
    backdrop_path: null,
    belongs_to_collection: null,
    budget: 0,
    genres: [],
    homepage: null,
    id: 0,
    imdb_id: null,
    origin_country: [],
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: null,
    production_companies: [],
    production_countries: [],
    release_date: "",
    revenue: 0,
    runtime: null,
    spoken_languages: [],
    status: "",
    tagline: null,
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
    credits: {
        cast: [],
        crew: []
      }
  },
  loading: true,
};

export const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {
    setMovieDetailsData: (state, action: PayloadAction<MovieDetails>) => {
      return { ...state, data: action.payload };
    },
    startDetailLoading: (state, action: PayloadAction<boolean>) => {
      return { ...state, loading: action.payload };
    },
    resetState: () => initialState,
  },
});

export const { setMovieDetailsData, startDetailLoading, resetState } =
  movieDetailSlice.actions;
export default movieDetailSlice.reducer;
